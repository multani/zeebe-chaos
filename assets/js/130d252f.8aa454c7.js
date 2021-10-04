"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[559],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6019:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={layout:"posts",title:"Time travel Experiment",date:new Date("2021-05-25T00:00:00.000Z"),categories:["chaos_experiment","broker","time"],tags:["data"],authors:"zell"},l="Chaos Day Summary",c={permalink:"/zeebe-chaos/2021/05/25/Reset-Clock",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blog/2021-05-25-Reset-Clock/index.md",source:"@site/blog/2021-05-25-Reset-Clock/index.md",title:"Time travel Experiment",description:"Recently we run a Game day where a lot of messages with high TTL have been stored in the state. This was based on an earlier incident, which we had seen in production. One suggested approach to resolve that incident was to increase the time, such that all messages are removed from the state. This and the fact that summer and winter time shifts can cause in other systems evil bugs, we wanted to find out how our system can handle time shifts. Phil joined me as participant and observer. There was a related issue which covers this topic as well, zeebe-chaos#3.",date:"2021-05-25T00:00:00.000Z",formattedDate:"May 25, 2021",tags:[{label:"data",permalink:"/zeebe-chaos/tags/data"}],readingTime:8.265,truncated:!1,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Full Disk Recovery",permalink:"/zeebe-chaos/2021/06/08/Full-Disk"},nextItem:{title:"Corrupted Snapshot Experiment Investigation",permalink:"/zeebe-chaos/2021/04/29/Corrupted-Snapshot"}},h={authorsImageUrls:[void 0]},p=[{value:"Chaos Experiment",id:"chaos-experiment",children:[{value:"Expected",id:"expected",children:[]},{value:"Changing Time",id:"changing-time",children:[]},{value:"Experiment on Benchmark Cluster",id:"experiment-on-benchmark-cluster",children:[]},{value:"Experiment on INT",id:"experiment-on-int",children:[]}]}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://confluence.camunda.com/display/ZEEBE/Game+Day+18.05.2021"},"Recently we run a Game day")," where a lot of messages with high TTL have been stored in the state. This was based on an earlier incident, which we had seen in production. One suggested approach to resolve that incident was to increase the time, such that all messages are removed from the state. This and the fact that summer and winter time shifts can cause in other systems evil bugs, we wanted to find out how our system can handle time shifts. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/saig0"},"Phil")," joined me as participant and observer. There was a related issue which covers this topic as well, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/3"},"zeebe-chaos#3"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR;")," Zeebe is able to handle time shifts back and forth, without observable issues. Operate seems to dislike it."),(0,i.kt)("h2",{id:"chaos-experiment"},"Chaos Experiment"),(0,i.kt)("p",null,"As part of the experiment we had to define what we expect, if we change the time. In order to keep it simple we decided to experiment with one-hour move forward and backwards. We wanted to run the experiment first against our normal benchmark cluster and afterwards against a Production - S Cluster on INT. Furthermore, we decided to test the time shift only on leaders, for now."),(0,i.kt)("h3",{id:"expected"},"Expected"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If we move the time one-hour forward we expect:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in general, timers should be triggered (snapshot, message TTL, job timeouts, timers etc.)"),(0,i.kt)("li",{parentName:"ul"},"the system should operate normal, means zeebe and operate should be healthy and continue working")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If we move the time one-hour backwards we expect:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"timers should not be triggered, until the deadline + 1 hour is reached"),(0,i.kt)("li",{parentName:"ul"},"the system should operate normal"),(0,i.kt)("li",{parentName:"ul"},"with operate we were not sure whether it has issues with exported records on the same time")),(0,i.kt)("p",null,"Before we started, with running the experiment, we had to find out how we can change the time in a docker container."),(0,i.kt)("h3",{id:"changing-time"},"Changing Time"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*Note:")," If you're not interested in how we change the time you can jump to the ",(0,i.kt)("a",{parentName:"p",href:"#experiment-on-benchmark-cluster"},"next section"),"*"),(0,i.kt)("p",null,"If you search for it, you find quite quickly answers in how to change the time in a docker container. For example, we found this ",(0,i.kt)("a",{parentName:"p",href:"https://serverfault.com/a/898842/283059"},"answer"),", which was quite useful."),(0,i.kt)("p",null,"In order to apply this, we first need to make sure that we have the right ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/capabilities.7.html"},"linux capabilities")," to change the system time. For that we need the ",(0,i.kt)("inlineCode",{parentName:"p"},"SYS_TIME")," capability. In our benchmarks this is quite easy to do, we just need to change ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/blob/develop/benchmarks/setup/default/zeebe-values.yaml#L16"},"this line")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"SYS_TIME"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'podSecurityContext:\n  capabilities:\n        add: ["NET_ADMIN", "SYS_TIME"]\n')),(0,i.kt)("p",null,"After changing this, we can set the time via ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/date.1.html"},(0,i.kt)("inlineCode",{parentName:"a"},"date -s")),". Since we were not sure whether this really works for our java process, we started a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/9/tools/jshell.htm#JSWOR-GUID-C337353B-074A-431C-993F-60C226163F00"},(0,i.kt)("inlineCode",{parentName:"a"},"jshell"))," to verify that. ",(0,i.kt)("em",{parentName:"p"},"Note:")," the jshell is only available if you use an container image with jdk. This is available, if you build your own zeebe docker image via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/blob/develop/createBenchmark.sh"},"zeebe/createBenchmark.sh"),"."),(0,i.kt)("p",null,"Changing the time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'root@zell-phil-chaos-zeebe-1:/usr/local/zeebe# date\nTue May 25 10:29:33 UTC 2021\nroot@zell-phil-chaos-zeebe-1:/usr/local/zeebe# date +%T -s "09:29:00"\n09:29:00\nroot@zell-phil-chaos-zeebe-1:/usr/local/zeebe# date\nTue May 25 09:29:01 UTC 2021\nroot@zell-phil-chaos-zeebe-1:/usr/local/zeebe# jshell\nPicked up JAVA_TOOL_OPTIONS: -XX:MaxRAMPercentage=25.0 -XX:+ExitOnOutOfMemoryError -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/usr/local/zeebe/data -XX:ErrorFile=/usr/local/zeebe/data/zeebe_error%p.log -Xlog:gc*:file=/usr/local/zeebe/data/gc.log:time:filecount=7,filesize=8M\nMay 25, 2021 9:29:03 AM java.util.prefs.FileSystemPreferences$1 run\nINFO: Created user preferences directory.\n|  Welcome to JShell -- Version 11.0.11\n|  For an introduction type: /help intro\n\njshell> new Date()\n$1 ==> Tue May 25 09:29:08 UTC 2021\n')),(0,i.kt)("p",null,"After we found out how we can actually change the time we moved forward and run the described chaos experiment."),(0,i.kt)("h3",{id:"experiment-on-benchmark-cluster"},"Experiment on Benchmark Cluster"),(0,i.kt)("p",null,"As usual, we have set up a normal benchmark cluster with three nodes, three partitions and replication factor three. We run 200 PI/s and 12 workers against that cluster."),(0,i.kt)("h4",{id:"move-time-forward"},"Move Time Forward"),(0,i.kt)("p",null,"After setting up the cluster we had to find out who is the Leader and picked the one who is Leader for the most of the partitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ k exec -it zell-phil-chaos-zeebe-0 -- zbctl status --insecure\nBrokers:\n  Broker 0 - zell-phil-chaos-zeebe-0.zell-phil-chaos-zeebe.zell-phil-chaos.svc.cluster.local:26501\n    Version: 1.1.0-SNAPSHOT\n    Partition 1 : Follower, Healthy\n    Partition 2 : Leader, Healthy\n    Partition 3 : Leader, Healthy\n    ....\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On Broker 0 we increased the time by one hour.")," After doing this we observed the metrics, but we haven't noticed any issues. We verified logs in stackdriver, but no errors were thrown.\n",(0,i.kt)("img",{alt:"inc-1-hour-general",src:a(1369).Z})),(0,i.kt)("p",null,"We noticed, looking at the metrics, that the snapshot was triggered when we moved the time forward. This was what we actually expected. Plus also new scheduled snapshot have been triggered and created.\n",(0,i.kt)("img",{alt:"inc-1-hour-snapshot",src:a(2724).Z})),(0,i.kt)("p",null,"On the elastic exporter we can see that flushing has happened earlier than usual, because we increased the time. This was also expected.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"inc-1-hour-export",src:a(8517).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experiment succeeded")," \u2714\ufe0f"),(0,i.kt)("h4",{id:"move-time-backwards"},"Move Time Backwards"),(0,i.kt)("p",null,"In order to run the experiment again, with moving the timer backwards, we set up a new benchmark cluster. This time we run the experiment on Broker 1, since he was the leader of the most partitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Broker 1 - zell-phil-chaos-zeebe-1.zell-phil-chaos-zeebe.zell-phil-chaos.svc.cluster.local:26501\n  Version: 1.1.0-SNAPSHOT\n  Partition 1 : Follower, Healthy\n  Partition 2 : Leader, Healthy\n  Partition 3 : Leader, Healthy\n")),(0,i.kt)("p",null,"No general issues have been detected, as expected no longer snapshots were taken.\n",(0,i.kt)("img",{alt:"dec-1-hour-general",src:a(3778).Z})),(0,i.kt)("p",null,"We have run the benchmark for a bit longer, to see whether the snapshot will be triggered later, which was indeed the case.\n",(0,i.kt)("img",{alt:"dec-1-hour-snapshot-later",src:a(1377).Z})),(0,i.kt)("p",null,"We could also observe how the journal segments increased until we took the next snapshot.\n",(0,i.kt)("img",{alt:"dec-1-hour-snapshot-segments",src:a(6207).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experiment succeeded")," \u2714\ufe0f"),(0,i.kt)("h3",{id:"experiment-on-int"},"Experiment on INT"),(0,i.kt)("p",null,"After running the experiment against our benchmark clusters we were confident to run it against a Production S cluster on INT.\nWe have set up a Production S cluster in our chaos cluster and run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/blob/develop/benchmarks/setup/newCloudBenchmark.sh"},"cloud benchmark")," against it. It starts starter and worker against that Production S cluster, turned out not with the same load (luckily this doesn't matter for this experiment). The starter and workers are deployed in the Zeebe Team gke cluster."),(0,i.kt)("h4",{id:"how-to-change-the-time-on-int"},"How to change the time on INT"),(0,i.kt)("p",null,"On INT, it is not that simple to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"SYS_TIME")," capability, which we need to change the time. Luckily we already have experience, with getting the necessary capability we need to have.\nOn a previous chaos day we have added ",(0,i.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," capability to a running zeebe container in order to experiment with network partitioning, you can read about that ","[here]","({{ site.baseurl }}{% link _posts/2021-03-23-camunda-cloud-network-partition.md %})."),(0,i.kt)("p",null,"The following patch adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"SYS_TIME")," cap to our linux container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    spec:\n      containers:\n        - name: "zeebe"\n          securityContext:\n            capabilities:\n              add:\n                - "SYS_TIME"\n')),(0,i.kt)("p",null,"The following script applies the patch to our Zeebe cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\nset -euo pipefail\n\nscriptPath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )\nsource utils.sh\n\nnamespace=$(getNamespace)\n\nCLUSTERID=${namespace%-zeebe}\n\nkubectl patch zb "$CLUSTERID" --type merge --patch=\'{"spec":{"controller":{"reconcileDisabled":true}}}\'\nkubectl patch statefulset zeebe -n "$namespace" --patch "$(cat $scriptPath/sys_time_patch.yaml)"\nkubectl delete pod -l "$(getLabel)" -n "$namespace"\n')),(0,i.kt)("h4",{id:"move-time-forward-on-int"},"Move Time Forward on INT"),(0,i.kt)("p",null,"After we patched our resources we can now change the time as before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'root@zeebe-0:/usr/local/zeebe# date\nTue May 25 09:55:33 UTC 2021\nroot@zeebe-0:/usr/local/zeebe# date +%T -s "10:55:00"\n10:55:00\nroot@zeebe-0:/usr/local/zeebe# date\nTue May 25 10:55:01 UTC 2021\n')),(0,i.kt)("p",null,"In the general section of our Grafana Dashboard everything looks fine. We can't see any issues here, except that the exporting is much less than the processing.\n",(0,i.kt)("img",{alt:"int-inc-1-hour-general",src:a(4711).Z})),(0,i.kt)("p",null,"We took a closer look at the processing panels and saw that the exporter lag a lot behind, which causes Operate lagging behind and that fewer segments are deleted.\n",(0,i.kt)("img",{alt:"int-inc-1-hour-exporting",src:a(3123).Z})),(0,i.kt)("p",null,"On moving the time forward we see as expected the snapshotting has been triggered.\n",(0,i.kt)("img",{alt:"int-inc-1-hour-snapshot",src:a(833).Z})),(0,i.kt)("p",null,"Stackdriver shows no errors for the Zeebe service. But later, in operate we observed that no new data was imported after 11:50, we moved the time at 11:55 forward. In the logs we found the following exceptions, which need to be investigated further."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Exception occurred when importing data: io.camunda.operate.exceptions.PersistenceException: Update request failed for [operate-import-position-1.0.0_] and id [1-process-instance] with the message [Elasticsearch exception [type=version_conflict_engine_exception, reason=[1-process-instance]: version conflict, required seqNo [1681], primary term [1]. current document has seqNo [1688] and primary term [1]]].\n")),(0,i.kt)("p",null,"The exception in more detail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'io.camunda.operate.exceptions.PersistenceException: Update request failed for [operate-import-position-1.0.0_] and id [2-job] with the message [Elasticsearch exception [type=version_conflict_engine_exception, reason=[2-job]: version conflict, required seqNo [1765], primary term [1]. current document has seqNo [1771] and primary term [1]]].\n    at io.camunda.operate.util.ElasticsearchUtil.executeUpdate(ElasticsearchUtil.java:271) ~[operate-els-schema-1.0.0.jar!/:?]\n    at io.camunda.operate.zeebeimport.ImportPositionHolder.recordLatestLoadedPosition(ImportPositionHolder.java:100) ~[operate-qa-importer-1.0.0.jar!/:?]\n    at io.camunda.operate.zeebeimport.ImportJob.call(ImportJob.java:86) ~[operate-qa-importer-1.0.0.jar!/:?]\n    at io.camunda.operate.zeebeimport.RecordsReader.lambda$scheduleImport$1(RecordsReader.java:217) ~[operate-qa-importer-1.0.0.jar!/:?]\n    at java.util.concurrent.FutureTask.run(Unknown Source) [?:?]\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source) [?:?]\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source) [?:?]\n    at java.lang.Thread.run(Unknown Source) [?:?]\nCaused by: org.elasticsearch.ElasticsearchStatusException: Elasticsearch exception [type=version_conflict_engine_exception, reason=[2-job]: version conflict, required seqNo [1765], primary term [1]. current document has seqNo [1771] and primary term [1]]\n    at org.elasticsearch.rest.BytesRestResponse.errorFromXContent(BytesRestResponse.java:176) ~[elasticsearch-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.parseEntity(RestHighLevelClient.java:1933) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.parseResponseException(RestHighLevelClient.java:1910) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.internalPerformRequest(RestHighLevelClient.java:1667) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.performRequest(RestHighLevelClient.java:1624) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.performRequestAndParseEntity(RestHighLevelClient.java:1594) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at org.elasticsearch.client.RestHighLevelClient.update(RestHighLevelClient.java:1061) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n    at io.camunda.operate.util.ElasticsearchUtil.executeUpdate(ElasticsearchUtil.java:266) ~[operate-els-schema-1.0.0.jar!/:?]\n    ... 7 more\n    Suppressed: org.elasticsearch.client.ResponseException: method [POST], host [http://elasticsearch:9200], URI [/operate-import-position-1.0.0_/_update/2-job?refresh=true&timeout=1m], status line [HTTP/1.1 409 Conflict]\n{"error":{"root_cause":[{"type":"version_conflict_engine_exception","reason":"[2-job]: version conflict, required seqNo [1765], primary term [1]. current document has seqNo [1771] and primary term [1]","index_uuid":"7jsKYxw7RxWQhba-UIG5Wg","shard":"0","index":"operate-import-position-1.0.0_"}],"type":"version_conflict_engine_exception","reason":"[2-job]: version conflict, required seqNo [1765], primary term [1]. current document has seqNo [1771] and primary term [1]","index_uuid":"7jsKYxw7RxWQhba-UIG5Wg","shard":"0","index":"operate-import-position-1.0.0_"},"status":409}\n        at org.elasticsearch.client.RestClient.convertResponse(RestClient.java:326) ~[elasticsearch-rest-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestClient.performRequest(RestClient.java:296) ~[elasticsearch-rest-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestClient.performRequest(RestClient.java:270) ~[elasticsearch-rest-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestHighLevelClient.internalPerformRequest(RestHighLevelClient.java:1654) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestHighLevelClient.performRequest(RestHighLevelClient.java:1624) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestHighLevelClient.performRequestAndParseEntity(RestHighLevelClient.java:1594) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n        at org.elasticsearch.client.RestHighLevelClient.update(RestHighLevelClient.java:1061) ~[elasticsearch-rest-high-level-client-7.12.1.jar!/:7.12.1]\n        at io.camunda.operate.util.ElasticsearchUtil.executeUpdate(ElasticsearchUtil.java:266) ~[operate-els-schema-1.0.0.jar!/:?]\n        at io.camunda.operate.zeebeimport.ImportPositionHolder.recordLatestLoadedPosition(ImportPositionHolder.java:100) ~[operate-qa-importer-1.0.0.jar!/:?]\n        at io.camunda.operate.zeebeimport.ImportJob.call(ImportJob.java:86) ~[operate-qa-importer-1.0.0.jar!/:?]\n        at io.camunda.operate.zeebeimport.RecordsReader.lambda$scheduleImport$1(RecordsReader.java:217) ~[operate-qa-importer-1.0.0.jar!/:?]\n        at java.util.concurrent.FutureTask.run(Unknown Source) [?:?]\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source) [?:?]\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source) [?:?]\n        at java.lang.Thread.run(Unknown Source) [?:?]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experiment failed")," \u274c "),(0,i.kt)("p",null,"Operate was not operating normal, the exceptions were not expected."),(0,i.kt)("p",null,"It seems that changing the time on INT, causes some unexpected problems for Operate. We need to investigate that further and resolve them before we can continue here and make that an automated test. Furthermore, we need to investigate how problematic it is that our exporting lags behind, which is related to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/issues/6747"},"zeebe#6747"),", and how we can resolve that."),(0,i.kt)("p",null,"In general, we saw that Zeebe has no real issues with time shifts and that timers can be triggered by changing the underlying system time. Still we should make sure that our containers are running on UTC time nodes (which we do), such that we avoid issues with daylight saving time."),(0,i.kt)("p",null,"{% if page.author %}",(0,i.kt)("sup",null,(0,i.kt)("em",{parentName:"p"},"Written by: {{page.author}}")),"{% endif %}"))}d.isMDXComponent=!0},3778:function(e,t,a){t.Z=a.p+"assets/images/dec-1-hour-general-d20ebf3b510bacc0bae5a2533d7e3f1d.png"},1377:function(e,t,a){t.Z=a.p+"assets/images/dec-1-hour-snapshot-later-9a9aa6dd1f828ccc63e0d67370765945.png"},6207:function(e,t,a){t.Z=a.p+"assets/images/dec-1-hour-snapshot-segments-342d9ead5f0535ae7a52b5d0e7f8fe89.png"},8517:function(e,t,a){t.Z=a.p+"assets/images/inc-1-hour-export-f6f3d566842ac4cf305ceb7d010b5c59.png"},1369:function(e,t,a){t.Z=a.p+"assets/images/inc-1-hour-general-e76624008b7d3eb96d0c869f5fe6c1af.png"},2724:function(e,t,a){t.Z=a.p+"assets/images/inc-1-hour-snapshot-bc4a81c9e31d5fcba49d7a916f3e8e52.png"},3123:function(e,t,a){t.Z=a.p+"assets/images/int-inc-1-hour-exporting-ad1008f03377d042cc502110006a02fb.png"},4711:function(e,t,a){t.Z=a.p+"assets/images/int-inc-1-hour-general-f5fa293ae793ae59f4cc83da19456a2d.png"},833:function(e,t,a){t.Z=a.p+"assets/images/int-inc-1-hour-snapshot-7f4800f402632a8efb38d4a8ef1b370a.png"}}]);