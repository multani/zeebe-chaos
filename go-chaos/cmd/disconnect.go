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

package cmd

import (
	"github.com/spf13/cobra"
	"github.com/zeebe-io/zeebe-chaos/go-chaos/backend"
)

var (
	oneDirection    bool
	disconnectToAll bool
)

func init() {
	rootCmd.AddCommand(disconnect)

	// disconnect brokers
	disconnect.AddCommand(disconnectBrokers)
	// broker 1
	disconnectBrokers.Flags().StringVar(&broker1Role, "broker1Role", "LEADER", "Specify the partition role [LEADER, FOLLOWER] of the first Broker")
	disconnectBrokers.Flags().IntVar(&broker1PartitionId, "broker1PartitionId", 1, "Specify the partition id of the first Broker")
	disconnectBrokers.Flags().IntVar(&broker1NodeId, "broker1NodeId", -1, "Specify the nodeId of the first Broker")
	disconnectBrokers.MarkFlagsMutuallyExclusive("broker1PartitionId", "broker1NodeId")
	// broker 2
	disconnectBrokers.Flags().StringVar(&broker2Role, "broker2Role", "LEADER", "Specify the partition role [LEADER, FOLLOWER] of the second Broker")
	disconnectBrokers.Flags().IntVar(&broker2PartitionId, "broker2PartitionId", 2, "Specify the partition id of the second Broker")
	disconnectBrokers.Flags().IntVar(&broker2NodeId, "broker2NodeId", -1, "Specify the nodeId of the second Broker")
	// general
	disconnectBrokers.Flags().BoolVar(&oneDirection, "one-direction", false, "Specify whether the network partition should be setup only in one direction (asymmetric)")
	disconnectBrokers.MarkFlagsMutuallyExclusive("broker2PartitionId", "broker2NodeId")

	// disconnect gateway
	disconnect.AddCommand(disconnectGateway)
	disconnectGateway.Flags().IntVar(&nodeId, "nodeId", -1, "Specify the nodeId of the Broker")
	disconnectGateway.Flags().StringVar(&role, "role", "LEADER", "Specify the partition role [LEADER, FOLLOWER] of the Broker")
	disconnectGateway.Flags().IntVar(&partitionId, "partitionId", 1, "Specify the partition id of the Broker")
	disconnectGateway.Flags().BoolVar(&oneDirection, "one-direction", false, "Specify whether the network partition should be setup only in one direction (asymmetric)")
	disconnectGateway.Flags().BoolVar(&disconnectToAll, "all", false, "Specify whether the gateway should be disconnected to all brokers")
	disconnectGateway.MarkFlagsMutuallyExclusive("all", "partitionId", "nodeId")
}

var disconnect = &cobra.Command{
	Use:   "disconnect",
	Short: "Disconnect Zeebe nodes",
	Long:  `Disconnect Zeebe nodes, uses sub-commands to disconnect leaders, followers, etc.`,
}

func ensureNoError(err error) {
	if err != nil {
		panic(err)
	}
}

var disconnectBrokers = &cobra.Command{
	Use:   "brokers",
	Short: "Disconnect Zeebe Brokers",
	Long:  `Disconnect Zeebe Brokers with a given partition and role.`,
	Run: func(cmd *cobra.Command, args []string) {
		err := backend.DisconnectBroker(backend.DisconnectBrokerCfg{
			Broker1Cfg: backend.Broker{
				NodeId:      broker1NodeId,
				PartitionId: broker1PartitionId,
				Role:        broker1Role,
			},
			Broker2Cfg: backend.Broker{
				NodeId:      broker2NodeId,
				PartitionId: broker2PartitionId,
				Role:        broker2Role,
			},
			OneDirection: oneDirection,
		})
		ensureNoError(err)
	},
}

var disconnectGateway = &cobra.Command{
	Use:   "gateway",
	Short: "Disconnect Zeebe Gateway",
	Long:  `Disconnect Zeebe Gateway from Broker with a given partition and role.`,
	Run: func(cmd *cobra.Command, args []string) {
		err := backend.DisconnectGateway(backend.DisconnectGatewayCfg{
			OneDirection:    oneDirection,
			DisconnectToAll: disconnectToAll,
			BrokerCfg: backend.Broker{
				Role:        role,
				PartitionId: partitionId,
				NodeId:      nodeId,
			},
		})
		ensureNoError(err)
	},
}
