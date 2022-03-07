package cmd

import (
	"context"
	"fmt"

	"github.com/spf13/cobra"
	"github.com/zeebe-io/zeebe-chaos/chaos-workers/go-chaos-worker/internal"
)

func init() {
	rootCmd.AddCommand(topologyCmd)
}

var topologyCmd = &cobra.Command{
	Use:   "topology",
	Short: "Print the Zeebe topology deployed in the current namespace",
	Long:  `Shows the current Zeebe topology, in the current kubernetes namespace.`,
	Run: func(cmd *cobra.Command, args []string) {
		port := 26500
		closeFn, err := internal.GatewayPortForward(port)
		if err != nil {
			panic(err.Error())
		}
		defer closeFn()

		client, err := internal.CreateZeebeClient(port)
		if err != nil {
			panic(err.Error())
		}

		response, err := client.NewTopologyCommand().Send(context.TODO())
		if err != nil {
			panic(err)
		}
		fmt.Printf("Response topology, %s", response.String())
	},
}
