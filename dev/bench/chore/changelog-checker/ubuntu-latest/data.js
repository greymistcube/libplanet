window.BENCHMARK_DATA = {
  "lastUpdate": 1707152372162,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "eebea10b6c19f838c7378de055d759e33d09fc32",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:48:12+09:00",
          "tree_id": "35d56191c462f4ee3a7b9749431d77f05fa78129",
          "url": "https://github.com/greymistcube/libplanet/commit/eebea10b6c19f838c7378de055d759e33d09fc32"
        },
        "date": 1707152365911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211229.82352941178,
            "unit": "ns",
            "range": "± 7924.455357198708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201118.54347826086,
            "unit": "ns",
            "range": "± 12945.690825681448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166222.2,
            "unit": "ns",
            "range": "± 5802.401837789201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3247478.5714285714,
            "unit": "ns",
            "range": "± 34756.61586543751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2882908.214285714,
            "unit": "ns",
            "range": "± 66371.82295985462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18358.521276595744,
            "unit": "ns",
            "range": "± 2464.556727919614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74043.3817204301,
            "unit": "ns",
            "range": "± 5851.171309437079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69033.10416666667,
            "unit": "ns",
            "range": "± 10419.79744977311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71957.26595744681,
            "unit": "ns",
            "range": "± 10309.004261778453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4101.90625,
            "unit": "ns",
            "range": "± 1145.725185917084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13166.021978021978,
            "unit": "ns",
            "range": "± 1205.6741588378584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41176.69072164949,
            "unit": "ns",
            "range": "± 5628.296612432325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2501427.470588235,
            "unit": "ns",
            "range": "± 79863.91185625682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2594977.304347826,
            "unit": "ns",
            "range": "± 65000.03733455906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3190807.214285714,
            "unit": "ns",
            "range": "± 52333.29299077445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3279851.080645161,
            "unit": "ns",
            "range": "± 148509.46984049492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13768648.235632183,
            "unit": "ns",
            "range": "± 835685.5624893553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009616.8,
            "unit": "ns",
            "range": "± 72210.76013729269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1951116.2,
            "unit": "ns",
            "range": "± 98535.0361055616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1634022.9891304348,
            "unit": "ns",
            "range": "± 121284.40126680855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12820706.180851065,
            "unit": "ns",
            "range": "± 1123933.015583169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5695887.833333333,
            "unit": "ns",
            "range": "± 40039.43525123819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14648876.1,
            "unit": "ns",
            "range": "± 150228.85736521176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36759662.666666664,
            "unit": "ns",
            "range": "± 235507.47816384776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74872427.42857143,
            "unit": "ns",
            "range": "± 600935.3375336861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150548145.96666667,
            "unit": "ns",
            "range": "± 1201000.7837740316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3725670.8822115385,
            "unit": "ns",
            "range": "± 23676.842536607757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190131.112141927,
            "unit": "ns",
            "range": "± 3244.4623862794297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764823.0817708333,
            "unit": "ns",
            "range": "± 4868.701251392787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956496.9739583333,
            "unit": "ns",
            "range": "± 8423.08726661201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618713.0170200893,
            "unit": "ns",
            "range": "± 1887.1877085329907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574069.2414362981,
            "unit": "ns",
            "range": "± 3732.6494189181485"
          }
        ]
      }
    ]
  }
}