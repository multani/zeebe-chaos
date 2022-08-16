package internal

import (
	"context"

	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes/fake"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/tools/clientcmd/api"
)

func CreateFakeClient() K8Client {
	k8Client := K8Client{Clientset: fake.NewSimpleClientset(), ClientConfig: &testClientConfig{namespace: "testNamespace"}}
	return k8Client
}
type testClientConfig struct {
	namespace          string
	namespaceSpecified bool
	err                error
}

func (c *testClientConfig) Namespace() (string, bool, error) {
	return c.namespace, c.namespaceSpecified, c.err
}

func (c *testClientConfig) RawConfig() (api.Config, error) {
	panic("implement me")
}

func (c *testClientConfig) ClientConfig() (*rest.Config, error) {
	panic("implement me")
}

func (c *testClientConfig) ConfigAccess() clientcmd.ConfigAccess {
	panic("implement me")
}

func (k K8Client) CreatePodWithLabels(selector *metav1.LabelSelector) (*v1.Pod, error) {
	return k.Clientset.CoreV1().Pods(k.GetCurrentNamespace()).Create(context.TODO(), &v1.Pod{
		ObjectMeta: metav1.ObjectMeta{Labels: selector.MatchLabels, Name: "testPod"},
		Spec:       v1.PodSpec{},
	}, metav1.CreateOptions{})
}