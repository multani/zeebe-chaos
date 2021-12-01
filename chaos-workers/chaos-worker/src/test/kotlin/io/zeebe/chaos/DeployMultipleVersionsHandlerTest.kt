package io.zeebe.chaos

import io.camunda.zeebe.client.ZeebeClient
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.model.bpmn.Bpmn
import org.awaitility.kotlin.await
import org.camunda.community.eze.EmbeddedZeebeEngine
import org.camunda.community.eze.RecordStreamSource
import org.camunda.community.eze.ZeebeEngine
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

@EmbeddedZeebeEngine
class DeployMultipleVersionsHandlerTest {

    private lateinit var client: ZeebeClient
    private lateinit var recordStream: RecordStreamSource

    @BeforeEach
    fun setup() {
        val bpmnModelInstance =
            Bpmn
                .createExecutableProcess("action")
                .startEvent()
                .serviceTask("actionTask")
                    { task -> task.zeebeJobType(DeployMultipleVersionsHandler.JOB_TYPE) }
                .endEvent()
                .done()
        client.deployModel(bpmnModelInstance, "action")

        val deployMultipleVersionsHandler =
            DeployMultipleVersionsHandler { _ -> client }

        client
            .newWorker()
            .jobType(deployMultipleVersionsHandler.getJobType())
            .handler(deployMultipleVersionsHandler)
            .open()
    }

    @Test
    fun `should deploy models`() {
        // given
        // when
        client.newCreateInstanceCommand()
            .bpmnProcessId("action")
            .latestVersion()
            .withResult()
            .send()
            .join()

        // then
        await.alias("should deploy multiple versions").until {
            recordStream.processRecords()
                .filter { record -> record.value.bpmnProcessId.equals("action") }
                .count() >= 10
        }
    }
}
