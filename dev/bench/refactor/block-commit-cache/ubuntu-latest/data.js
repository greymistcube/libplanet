window.BENCHMARK_DATA = {
  "lastUpdate": 1678673183813,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678673174324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273315.9693877551,
            "unit": "ns",
            "range": "± 45317.26412690319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293063.8163265306,
            "unit": "ns",
            "range": "± 38127.617416820605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245591.34375,
            "unit": "ns",
            "range": "± 36921.31558436931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15621896.78125,
            "unit": "ns",
            "range": "± 1106496.8723814352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12880018.547169812,
            "unit": "ns",
            "range": "± 537705.8581699581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31765.878787878788,
            "unit": "ns",
            "range": "± 11853.440540983327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88572.43,
            "unit": "ns",
            "range": "± 19924.17394521266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51713.15053763441,
            "unit": "ns",
            "range": "± 13174.404012545985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153087.375,
            "unit": "ns",
            "range": "± 31449.902284594245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8876.865853658537,
            "unit": "ns",
            "range": "± 3864.8110450423524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 39696.03125,
            "unit": "ns",
            "range": "± 9780.696082701428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4541524.770833333,
            "unit": "ns",
            "range": "± 445793.61373160535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6964186.333333333,
            "unit": "ns",
            "range": "± 528671.777679232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33467893.66101695,
            "unit": "ns",
            "range": "± 1476605.8722209877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8521026.684210526,
            "unit": "ns",
            "range": "± 725815.6037318009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39898372.347826086,
            "unit": "ns",
            "range": "± 1514419.6836495374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8070788.318359375,
            "unit": "ns",
            "range": "± 156021.40900492418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2447496.7575334823,
            "unit": "ns",
            "range": "± 39483.99764594132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1894366.5018382352,
            "unit": "ns",
            "range": "± 37332.73296824325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3618347.2898828126,
            "unit": "ns",
            "range": "± 231207.66993657404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083780.1908735796,
            "unit": "ns",
            "range": "± 23192.9818361463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1109837.6436298077,
            "unit": "ns",
            "range": "± 15911.558424038503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10887630.479166666,
            "unit": "ns",
            "range": "± 946612.4435780462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 28687305.76,
            "unit": "ns",
            "range": "± 754617.2288594553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 73831274.9484536,
            "unit": "ns",
            "range": "± 5291746.103602963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 140351035.05357143,
            "unit": "ns",
            "range": "± 5673547.984535601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 288854286.39772725,
            "unit": "ns",
            "range": "± 15888077.174361296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96314.55434782608,
            "unit": "ns",
            "range": "± 19355.403497098047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1904460.4130434783,
            "unit": "ns",
            "range": "± 178247.07141457184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3399457.3229166665,
            "unit": "ns",
            "range": "± 336298.3040422515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2659709.414893617,
            "unit": "ns",
            "range": "± 240284.53877422967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6999053.397959184,
            "unit": "ns",
            "range": "± 675271.9850344037"
          }
        ]
      }
    ]
  }
}