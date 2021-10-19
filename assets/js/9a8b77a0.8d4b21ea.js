"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[9696],{4881:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Recovery (Fail Over) time","metadata":{"permalink":"/zeebe-chaos/2021/10/05/recovery-time","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-10-05-recovery-time/index.md","source":"@site/blog/2021-10-05-recovery-time/index.md","title":"Recovery (Fail Over) time","description":"In the last quarter we worked on a new \\"feature\\" which is called \\"building state on followers\\". In short,","date":"2021-10-05T00:00:00.000Z","formattedDate":"October 5, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":4.895,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"nextItem":{"title":"Old-Clients","permalink":"/zeebe-chaos/2021/09/23/Old-Clients"}}},{"id":"Old-Clients","metadata":{"permalink":"/zeebe-chaos/2021/09/23/Old-Clients","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-09-23-Old-Clients/index.md","source":"@site/blog/2021-09-23-Old-Clients/index.md","title":"Old-Clients","description":"It has been awhile since the last post, I\'m happy to be back.","date":"2021-09-23T00:00:00.000Z","formattedDate":"September 23, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":2.61,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Recovery (Fail Over) time","permalink":"/zeebe-chaos/2021/10/05/recovery-time"},"nextItem":{"title":"Slow Network","permalink":"/zeebe-chaos/2021/07/06/Slow-Network"}}},{"id":"Slow Network","metadata":{"permalink":"/zeebe-chaos/2021/07/06/Slow-Network","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-07-06-Slow-Network/index.md","source":"@site/blog/2021-07-06-Slow-Network/index.md","title":"Slow Network","description":"On a previous Chaos Day we played around with ToxiProxy , which allows injecting failures on the network level. For example dropping packages, causing latency etc.","date":"2021-07-06T00:00:00.000Z","formattedDate":"July 6, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":5.905,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Old-Clients","permalink":"/zeebe-chaos/2021/09/23/Old-Clients"},"nextItem":{"title":"Full Disk Recovery","permalink":"/zeebe-chaos/2021/06/08/Full-Disk"}}},{"id":"Full Disk Recovery","metadata":{"permalink":"/zeebe-chaos/2021/06/08/Full-Disk","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-06-08-Full-Disk/index.md","source":"@site/blog/2021-06-08-Full-Disk/index.md","title":"Full Disk Recovery","description":"On this chaos day we wanted to experiment with OOD recovery and ELS connection issues. This is related to the following issues from our hypothesis backlog: zeebe-chaos#32 and zeebe-chaos#14. This time @Nico joined me.","date":"2021-06-08T00:00:00.000Z","formattedDate":"June 8, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":7.125,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Slow Network","permalink":"/zeebe-chaos/2021/07/06/Slow-Network"},"nextItem":{"title":"Time travel Experiment","permalink":"/zeebe-chaos/2021/05/25/Reset-Clock"}}},{"id":"Time travel Experiment","metadata":{"permalink":"/zeebe-chaos/2021/05/25/Reset-Clock","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-05-25-Reset-Clock/index.md","source":"@site/blog/2021-05-25-Reset-Clock/index.md","title":"Time travel Experiment","description":"Recently we run a Game day where a lot of messages with high TTL have been stored in the state. This was based on an earlier incident, which we had seen in production. One suggested approach to resolve that incident was to increase the time, such that all messages are removed from the state. This and the fact that summer and winter time shifts can cause in other systems evil bugs, we wanted to find out how our system can handle time shifts. Phil joined me as participant and observer. There was a related issue which covers this topic as well, zeebe-chaos#3.","date":"2021-05-25T00:00:00.000Z","formattedDate":"May 25, 2021","tags":[{"label":"data","permalink":"/zeebe-chaos/tags/data"}],"readingTime":8.205,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Full Disk Recovery","permalink":"/zeebe-chaos/2021/06/08/Full-Disk"},"nextItem":{"title":"Corrupted Snapshot Experiment Investigation","permalink":"/zeebe-chaos/2021/04/29/Corrupted-Snapshot"}}},{"id":"Corrupted Snapshot Experiment Investigation","metadata":{"permalink":"/zeebe-chaos/2021/04/29/Corrupted-Snapshot","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-04-29-Corrupted-Snapshot/index.md","source":"@site/blog/2021-04-29-Corrupted-Snapshot/index.md","title":"Corrupted Snapshot Experiment Investigation","description":"A while ago we have written an experiment, which should verify that followers are not able to become leader, if they have a corrupted snapshot. You can find that specific experiment here. This experiment was executed regularly against Production-M and Production-S Camunda Cloud cluster plans. With the latest changes, in the upcoming 1.0 release, we changed some behavior in regard to detect snapshot corruption on followers.","date":"2021-04-29T00:00:00.000Z","formattedDate":"April 29, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":7.195,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Time travel Experiment","permalink":"/zeebe-chaos/2021/05/25/Reset-Clock"},"nextItem":{"title":"BPMN meets Chaos Engineering","permalink":"/zeebe-chaos/2021/04/03/bpmn-meets-chaos-engineering"}}},{"id":"BPMN meets Chaos Engineering","metadata":{"permalink":"/zeebe-chaos/2021/04/03/bpmn-meets-chaos-engineering","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-04-03-bpmn-meets-chaos-engineering/index.md","source":"@site/blog/2021-04-03-bpmn-meets-chaos-engineering/index.md","title":"BPMN meets Chaos Engineering","description":"On the first of April (2021) we ran our Spring Hackday at Camunda. This is an event where the developers at camunda come together to work on projects they like or on new ideas/approaches they want to try out. This time we (Philipp and me) wanted to orchestrate our Chaos Experiments with BPMN. If you already know how we automated our chaos experiments before, you can skip the next section","date":"2021-04-03T00:00:00.000Z","formattedDate":"April 3, 2021","tags":[{"label":"tools","permalink":"/zeebe-chaos/tags/tools"}],"readingTime":7.615,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Corrupted Snapshot Experiment Investigation","permalink":"/zeebe-chaos/2021/04/29/Corrupted-Snapshot"},"nextItem":{"title":"Set file immutable","permalink":"/zeebe-chaos/2021/03/30/set-file-immutable"}}},{"id":"Set file immutable","metadata":{"permalink":"/zeebe-chaos/2021/03/30/set-file-immutable","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-03-30-set-file-immutable/index.md","source":"@site/blog/2021-03-30-set-file-immutable/index.md","title":"Set file immutable","description":"This chaos day was a bit different. Actually I wanted to experiment again with camunda cloud and verify that our high load chaos experiments are now working with the newest cluster plans, see zeebe-cluster-testbench#135.","date":"2021-03-30T00:00:00.000Z","formattedDate":"March 30, 2021","tags":[],"readingTime":6.5,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"BPMN meets Chaos Engineering","permalink":"/zeebe-chaos/2021/04/03/bpmn-meets-chaos-engineering"},"nextItem":{"title":"Camunda Cloud network partition","permalink":"/zeebe-chaos/2021/03/23/camunda-cloud-network-partition"}}},{"id":"Camunda Cloud network partition","metadata":{"permalink":"/zeebe-chaos/2021/03/23/camunda-cloud-network-partition","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-03-23-camunda-cloud-network-partition/index.md","source":"@site/blog/2021-03-23-camunda-cloud-network-partition/index.md","title":"Camunda Cloud network partition","description":"This time Deepthi was joining me on my regular Chaos Day.","date":"2021-03-23T00:00:00.000Z","formattedDate":"March 23, 2021","tags":[],"readingTime":7.18,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Set file immutable","permalink":"/zeebe-chaos/2021/03/30/set-file-immutable"},"nextItem":{"title":"Fault-tolerant processing of process instances","permalink":"/zeebe-chaos/2021/03/09/cont-workflow-instance"}}},{"id":"Fault-tolerant processing of process instances","metadata":{"permalink":"/zeebe-chaos/2021/03/09/cont-workflow-instance","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-03-09-cont-workflow-instance/index.md","source":"@site/blog/2021-03-09-cont-workflow-instance/index.md","title":"Fault-tolerant processing of process instances","description":"Today I wanted to add another chaos experiment, to increase our automated chaos experiments collection. This time we will deploy a process model (with timer start event), restart a node and complete the process instance via zbctl.","date":"2021-03-09T00:00:00.000Z","formattedDate":"March 9, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"},{"label":"data","permalink":"/zeebe-chaos/tags/data"}],"readingTime":5.98,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Camunda Cloud network partition","permalink":"/zeebe-chaos/2021/03/23/camunda-cloud-network-partition"},"nextItem":{"title":"Automating Deployment Distribution Chaos Experiment","permalink":"/zeebe-chaos/2021/02/23/automate-deployments-dist"}}},{"id":"Automating Deployment Distribution Chaos Experiment","metadata":{"permalink":"/zeebe-chaos/2021/02/23/automate-deployments-dist","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-02-23-automate-deployments-dist/index.md","source":"@site/blog/2021-02-23-automate-deployments-dist/index.md","title":"Automating Deployment Distribution Chaos Experiment","description":"This time I wanted to automate a chaos experiment via the ChaosToolkit, which I did on the last chaos day. For a recap check out the last chaos day summary.","date":"2021-02-23T00:00:00.000Z","formattedDate":"February 23, 2021","tags":[{"label":"tests","permalink":"/zeebe-chaos/tags/tests"}],"readingTime":6.855,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Fault-tolerant processing of process instances","permalink":"/zeebe-chaos/2021/03/09/cont-workflow-instance"},"nextItem":{"title":"Deployment Distribution","permalink":"/zeebe-chaos/2021/01/26/deployments"}}},{"id":"Deployment Distribution","metadata":{"permalink":"/zeebe-chaos/2021/01/26/deployments","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-01-26-deployments/index.md","source":"@site/blog/2021-01-26-deployments/index.md","title":"Deployment Distribution","description":"On this chaos day we wanted to experiment a bit with deployment\'s and there distribution.","date":"2021-01-26T00:00:00.000Z","formattedDate":"January 26, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"},{"label":"data","permalink":"/zeebe-chaos/tags/data"}],"readingTime":10.855,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Automating Deployment Distribution Chaos Experiment","permalink":"/zeebe-chaos/2021/02/23/automate-deployments-dist"},"nextItem":{"title":"Network partitions","permalink":"/zeebe-chaos/2021/01/19/network-partition"}}},{"id":"Network partitions","metadata":{"permalink":"/zeebe-chaos/2021/01/19/network-partition","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-01-19-network-partition/index.md","source":"@site/blog/2021-01-19-network-partition/index.md","title":"Network partitions","description":"As you can see, I migrated the old chaos day summaries to github pages, for better readability.","date":"2021-01-19T00:00:00.000Z","formattedDate":"January 19, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":7.03,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Deployment Distribution","permalink":"/zeebe-chaos/2021/01/26/deployments"},"nextItem":{"title":"Disconnect Leader and one Follower","permalink":"/zeebe-chaos/2021/01/07/disconnect-leader-and-follower"}}},{"id":"Disconnect Leader and one Follower","metadata":{"permalink":"/zeebe-chaos/2021/01/07/disconnect-leader-and-follower","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-01-07-disconnect-leader-and-follower/index.md","source":"@site/blog/2021-01-07-disconnect-leader-and-follower/index.md","title":"Disconnect Leader and one Follower","description":"Happy new year everyone","date":"2021-01-07T00:00:00.000Z","formattedDate":"January 7, 2021","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":7.64,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Network partitions","permalink":"/zeebe-chaos/2021/01/19/network-partition"},"nextItem":{"title":"Message Correlation after Failover","permalink":"/zeebe-chaos/2020/11/24/message-correlation-after-failover"}}},{"id":"Message Correlation after Failover","metadata":{"permalink":"/zeebe-chaos/2020/11/24/message-correlation-after-failover","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-24-message-correlation-after-failover/index.md","source":"@site/blog/2020-11-24-message-correlation-after-failover/index.md","title":"Message Correlation after Failover","description":"Today I wanted to finally implement an experiment which I postponed for long time, see #24.","date":"2020-11-24T00:00:00.000Z","formattedDate":"November 24, 2020","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":3.38,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Disconnect Leader and one Follower","permalink":"/zeebe-chaos/2021/01/07/disconnect-leader-and-follower"},"nextItem":{"title":"Many Job Timeouts","permalink":"/zeebe-chaos/2020/11/11/job-timeouts"}}},{"id":"Many Job Timeouts","metadata":{"permalink":"/zeebe-chaos/2020/11/11/job-timeouts","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-11-job-timeouts/index.md","source":"@site/blog/2020-11-11-job-timeouts/index.md","title":"Many Job Timeouts","description":"In the last game day (on friday 06.11.2020) I wanted to test whether we can break a partition if many messages time out at the same time. What I did was I send many many messages with a decreasing TTL, which all targeting a specific point in time, such that they will all timeout at the same time. I expected that if this happens that the processor will try to time out all at once and break because the batch is to big. Fortunately this didn\'t happen, the processor was able to handle this.","date":"2020-11-11T00:00:00.000Z","formattedDate":"November 11, 2020","tags":[{"label":"availability","permalink":"/zeebe-chaos/tags/availability"}],"readingTime":3.885,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Message Correlation after Failover","permalink":"/zeebe-chaos/2020/11/24/message-correlation-after-failover"},"nextItem":{"title":"Investigate failing Chaos Tests","permalink":"/zeebe-chaos/2020/11/03/investigate-failing-tests"}}},{"id":"Investigate failing Chaos Tests","metadata":{"permalink":"/zeebe-chaos/2020/11/03/investigate-failing-tests","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-03-investigate-failing-tests/index.md","source":"@site/blog/2020-11-03-investigate-failing-tests/index.md","title":"Investigate failing Chaos Tests","description":"Today as part of the Chaos Day I wanted to investigate why our current Chaos Tests are failing and why our targeting cluster has been broken by them,","date":"2020-11-03T00:00:00.000Z","formattedDate":"November 3, 2020","tags":[{"label":"tests","permalink":"/zeebe-chaos/tags/tests"}],"readingTime":4.57,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Many Job Timeouts","permalink":"/zeebe-chaos/2020/11/11/job-timeouts"},"nextItem":{"title":"Non-graceful Shutdown Broker","permalink":"/zeebe-chaos/2020/10/20/non-graceful-shutdown"}}},{"id":"Non-graceful Shutdown Broker","metadata":{"permalink":"/zeebe-chaos/2020/10/20/non-graceful-shutdown","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-10-20-non-graceful-shutdown/index.md","source":"@site/blog/2020-10-20-non-graceful-shutdown/index.md","title":"Non-graceful Shutdown Broker","description":"Today I had not much time for the chaos day, because of writing Gameday Summary, Incident review, taking part of incidents etc. So enough chaos for one day :)","date":"2020-10-20T00:00:00.000Z","formattedDate":"October 20, 2020","tags":[],"readingTime":1.83,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Investigate failing Chaos Tests","permalink":"/zeebe-chaos/2020/11/03/investigate-failing-tests"},"nextItem":{"title":"Gateway memory consumption","permalink":"/zeebe-chaos/2020/10/27/standalone-gw-memory"}}},{"id":"Gateway memory consumption","metadata":{"permalink":"/zeebe-chaos/2020/10/27/standalone-gw-memory","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-10-27-standalone-gw-memory/index.md","source":"@site/blog/2020-10-27-standalone-gw-memory/index.md","title":"Gateway memory consumption","description":"In the last weeks I check multiple benchmarks and clusters in incidents. Often I had the feeling that the memory consumption from the gateway is not ideal","date":"2020-10-20T00:00:00.000Z","formattedDate":"October 20, 2020","tags":[],"readingTime":3.775,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Non-graceful Shutdown Broker","permalink":"/zeebe-chaos/2020/10/20/non-graceful-shutdown"},"nextItem":{"title":"Multiple Leader Changes","permalink":"/zeebe-chaos/2020/10/13/multiple-leader-changes"}}},{"id":"Multiple Leader Changes","metadata":{"permalink":"/zeebe-chaos/2020/10/13/multiple-leader-changes","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-10-13-multiple-leader-changes/index.md","source":"@site/blog/2020-10-13-multiple-leader-changes/index.md","title":"Multiple Leader Changes","description":"Today I wanted to add new chaostoolkit experiment, which we can automate.","date":"2020-10-13T00:00:00.000Z","formattedDate":"October 13, 2020","tags":[],"readingTime":3.39,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Gateway memory consumption","permalink":"/zeebe-chaos/2020/10/27/standalone-gw-memory"},"nextItem":{"title":"Play around with ToxiProxy","permalink":"/zeebe-chaos/2020/10/06/toxi-proxy"}}},{"id":"Play around with ToxiProxy","metadata":{"permalink":"/zeebe-chaos/2020/10/06/toxi-proxy","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-10-06-toxi-proxy/index.md","source":"@site/blog/2020-10-06-toxi-proxy/index.md","title":"Play around with ToxiProxy","description":"First chaos day since my parental leave.","date":"2020-10-06T00:00:00.000Z","formattedDate":"October 6, 2020","tags":[{"label":"tools","permalink":"/zeebe-chaos/tags/tools"}],"readingTime":3.275,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Multiple Leader Changes","permalink":"/zeebe-chaos/2020/10/13/multiple-leader-changes"},"nextItem":{"title":"Experiment with Camunda Cloud","permalink":"/zeebe-chaos/2020/08/20/experiment-with-camunda-cloud"}}},{"id":"Experiment with Camunda Cloud","metadata":{"permalink":"/zeebe-chaos/2020/08/20/experiment-with-camunda-cloud","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-08-20-experiment-with-camunda-cloud/index.md","source":"@site/blog/2020-08-20-experiment-with-camunda-cloud/index.md","title":"Experiment with Camunda Cloud","description":"In order to make our chaos experiments more realistic we have setup a new gke cluster, which is similar to the Camunda Cloud gke cluster.","date":"2020-08-20T00:00:00.000Z","formattedDate":"August 20, 2020","tags":[],"readingTime":3.875,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Play around with ToxiProxy","permalink":"/zeebe-chaos/2020/10/06/toxi-proxy"},"nextItem":{"title":"Experiment with Low Load","permalink":"/zeebe-chaos/2020/08/06/low-load"}}},{"id":"Experiment with Low Load","metadata":{"permalink":"/zeebe-chaos/2020/08/06/low-load","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-08-06-low-load/index.md","source":"@site/blog/2020-08-06-low-load/index.md","title":"Experiment with Low Load","description":"* Run a benchmark with low load","date":"2020-08-06T00:00:00.000Z","formattedDate":"August 6, 2020","tags":[],"readingTime":2.91,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Experiment with Camunda Cloud","permalink":"/zeebe-chaos/2020/08/20/experiment-with-camunda-cloud"},"nextItem":{"title":"Experiment without Exporters","permalink":"/zeebe-chaos/2020/07/30/experiment-without-exporters"}}},{"id":"Experiment without Exporters","metadata":{"permalink":"/zeebe-chaos/2020/07/30/experiment-without-exporters","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-30-experiment-without-exporters/index.md","source":"@site/blog/2020-07-30-experiment-without-exporters/index.md","title":"Experiment without Exporters","description":"* Run a chaos experiment without exporters","date":"2020-07-30T00:00:00.000Z","formattedDate":"July 30, 2020","tags":[],"readingTime":5.755,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Experiment with Low Load","permalink":"/zeebe-chaos/2020/08/06/low-load"},"nextItem":{"title":"Big Multi Instance","permalink":"/zeebe-chaos/2020/07/16/big-multi-instance"}}},{"id":"Big Multi Instance","metadata":{"permalink":"/zeebe-chaos/2020/07/16/big-multi-instance","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-16-big-multi-instance/index.md","source":"@site/blog/2020-07-16-big-multi-instance/index.md","title":"Big Multi Instance","description":"* investigate and fix automated chaos experiments - works again with 88c404f and cd8d685","date":"2020-07-16T00:00:00.000Z","formattedDate":"July 16, 2020","tags":[],"readingTime":2.82,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Experiment without Exporters","permalink":"/zeebe-chaos/2020/07/30/experiment-without-exporters"},"nextItem":{"title":"Experiment with Timers and Huge Variables","permalink":"/zeebe-chaos/2020/07/09/timer-and-huge-variables"}}},{"id":"Experiment with Timers and Huge Variables","metadata":{"permalink":"/zeebe-chaos/2020/07/09/timer-and-huge-variables","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-09-timer-and-huge-variables/index.md","source":"@site/blog/2020-07-09-timer-and-huge-variables/index.md","title":"Experiment with Timers and Huge Variables","description":"* Failure documentation about RAFT","date":"2020-07-09T00:00:00.000Z","formattedDate":"July 9, 2020","tags":[],"readingTime":3.43,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Big Multi Instance","permalink":"/zeebe-chaos/2020/07/16/big-multi-instance"},"nextItem":{"title":"Extract K8 resources from namespace","permalink":"/zeebe-chaos/2020/07/02/extract-k8-resources"}}},{"id":"Extract K8 resources from namespace","metadata":{"permalink":"/zeebe-chaos/2020/07/02/extract-k8-resources","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-02-extract-k8-resources/index.md","source":"@site/blog/2020-07-02-extract-k8-resources/index.md","title":"Extract K8 resources from namespace","description":"* Research: Read about DiRT (Disaster Recovery Tests) @ google - gave me same new ideas for more game days","date":"2020-07-02T00:00:00.000Z","formattedDate":"July 2, 2020","tags":[],"readingTime":1.02,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Experiment with Timers and Huge Variables","permalink":"/zeebe-chaos/2020/07/09/timer-and-huge-variables"},"nextItem":{"title":"Gateway Network Partition","permalink":"/zeebe-chaos/2020/06/25/gateway-network-partition"}}},{"id":"Gateway Network Partition","metadata":{"permalink":"/zeebe-chaos/2020/06/25/gateway-network-partition","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-25-gateway-network-partition/index.md","source":"@site/blog/2020-06-25-gateway-network-partition/index.md","title":"Gateway Network Partition","description":"* Documented failure cases for AsyncSnasphortDirector. Gave me some ideas where it might make sense to reinstall partition. Discussed a bit with @Deepthi","date":"2020-06-25T00:00:00.000Z","formattedDate":"June 25, 2020","tags":[],"readingTime":2.34,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Extract K8 resources from namespace","permalink":"/zeebe-chaos/2020/07/02/extract-k8-resources"},"nextItem":{"title":"Correlate Message after failover","permalink":"/zeebe-chaos/2020/06/18/correlate-message-after-failover"}}},{"id":"Correlate Message after failover","metadata":{"permalink":"/zeebe-chaos/2020/06/18/correlate-message-after-failover","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-18-correlate-message-after-failover/index.md","source":"@site/blog/2020-06-18-correlate-message-after-failover/index.md","title":"Correlate Message after failover","description":"* Documented failure cases for engine and stream processor. I think almost all possible failure cases I can think of we already handle, except problems on reading, which I think can\'t be handled.","date":"2020-06-18T00:00:00.000Z","formattedDate":"June 18, 2020","tags":[],"readingTime":0.91,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Gateway Network Partition","permalink":"/zeebe-chaos/2020/06/25/gateway-network-partition"},"nextItem":{"title":"High CPU load on Standalone Gateway","permalink":"/zeebe-chaos/2020/06/11/high-cpu-gateway"}}},{"id":"High CPU load on Standalone Gateway","metadata":{"permalink":"/zeebe-chaos/2020/06/11/high-cpu-gateway","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-11-high-cpu-gateway/index.md","source":"@site/blog/2020-06-11-high-cpu-gateway/index.md","title":"High CPU load on Standalone Gateway","description":"* Updated failure cases documentation for exporter based on review","date":"2020-06-11T00:00:00.000Z","formattedDate":"June 11, 2020","tags":[],"readingTime":1.985,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"Correlate Message after failover","permalink":"/zeebe-chaos/2020/06/18/correlate-message-after-failover"},"nextItem":{"title":"First Chaos Day!","permalink":"/zeebe-chaos/2020/06/04/first-chaos-day"}}},{"id":"First Chaos Day!","metadata":{"permalink":"/zeebe-chaos/2020/06/04/first-chaos-day","editUrl":"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-04-first-chaos-day/index.md","source":"@site/blog/2020-06-04-first-chaos-day/index.md","title":"First Chaos Day!","description":"First Chaos day","date":"2020-06-04T00:00:00.000Z","formattedDate":"June 4, 2020","tags":[],"readingTime":1.095,"truncated":true,"authors":[{"name":"Christopher Zell","title":"Chaos Engineer @ Zeebe","url":"https://github.com/zelldon","imageURL":"https://github.com/zelldon.png","key":"zell"}],"prevItem":{"title":"High CPU load on Standalone Gateway","permalink":"/zeebe-chaos/2020/06/11/high-cpu-gateway"}}}]}')}}]);