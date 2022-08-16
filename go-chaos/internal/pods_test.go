package internal

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func Test_GetSelfManagedBrokerPods(t *testing.T) {
	// given
	selector, err := metav1.ParseToLabelSelector(getSelfManagedBrokerLabels())
	require.NoError(t, err)

	k8Client := CreateFakeClient()
	k8Client.CreatePodWithLabels(selector)

	// when
	pods, err := k8Client.GetBrokerPods()

	// then
	require.NoError(t, err)
	require.NotNil(t, pods)
	require.NotEmpty(t, pods.Items)
	assert.Equal(t, "testPod", pods.Items[0].Name, "Expected to retrieve pod")
}

func Test_GetSelfManagedBrokerPodNames(t *testing.T) {
	// given
	selector, err := metav1.ParseToLabelSelector(getSelfManagedBrokerLabels())
	require.NoError(t, err)

	k8Client := CreateFakeClient()
	k8Client.CreatePodWithLabels(selector)

	// when
	names, err := k8Client.GetBrokerPodNames()

	// then
	require.NoError(t, err)
	require.NotNil(t, names)
	require.NotEmpty(t, names)
	assert.Equal(t, "testPod", names[0], "Expected to retrieve pod")
}

func Test_GetSaasBrokerPods(t *testing.T) {
	// given
	selector, err := metav1.ParseToLabelSelector(getSaasBrokerLabels())
	require.NoError(t, err)

	k8Client := CreateFakeClient()
	k8Client.CreatePodWithLabels(selector)

	// when
	pods, err := k8Client.GetBrokerPods()

	// then
	require.NoError(t, err)
	require.NotNil(t, pods)
	require.NotEmpty(t, pods.Items)
	assert.Equal(t, "testPod", pods.Items[0].Name, "Expected to retrieve pod")
}

func Test_GetNoBrokerPods(t *testing.T) {
	// given
	k8Client := CreateFakeClient()

	// when
	pods, err := k8Client.GetBrokerPods()

	// then
	require.NoError(t, err)
	require.NotNil(t, pods)
	require.Empty(t, pods.Items)
}

func Test_GetNoBrokerPodNames(t *testing.T) {
	// given
	k8Client := CreateFakeClient()

	// when
	names, err := k8Client.GetBrokerPodNames()

	// then
	require.NoError(t, err)
	require.NotNil(t, names)
	require.Empty(t, names)
}