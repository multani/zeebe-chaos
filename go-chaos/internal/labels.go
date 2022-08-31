// Copyright 2022 Camunda Services GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package internal

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
)

func getSelfManagedBrokerLabels() string {
	labelSelector := metav1.LabelSelector{
		MatchLabels: map[string]string{"app.kubernetes.io/component": "zeebe-broker"},
	}
	return labels.Set(labelSelector.MatchLabels).String()
}

func getSaasBrokerLabels() string {
	// For backwards compatability the brokers kept the gateway labels, for a statefulset the labels are not modifiable
	// To still be able to distinguish the standalone gateway with the broker, the gateway got a new label.
	labelSelector := metav1.LabelSelector{
		MatchLabels: map[string]string{"app.kubernetes.io/app": "zeebe", "app.kubernetes.io/component": "gateway"},
	}

	return labels.Set(labelSelector.MatchLabels).String()
}

func getSelfManagedGatewayLabels() string {
	labelSelector := metav1.LabelSelector{
		MatchLabels: map[string]string{"app.kubernetes.io/component": "zeebe-gateway"},
	}
	return labels.Set(labelSelector.MatchLabels).String()
}

func getSaasGatewayLabels() string {
	// For backwards compatability the brokers kept the gateway labels, for a statefulset the labels are not modifiable
	// To still be able to distinguish the standalone gateway with the broker, the gateway got a new label.
	labelSelector := metav1.LabelSelector{
		MatchLabels: map[string]string{"app.kubernetes.io/app": "zeebe", "app.kubernetes.io/component": "standalone-gateway"},
	}
	return labels.Set(labelSelector.MatchLabels).String()
}