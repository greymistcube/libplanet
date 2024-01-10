window.BENCHMARK_DATA = {
  "lastUpdate": 1704870334928,
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
          "id": "62240d10330c147e4ada92b787ce0d35985adac1",
          "message": "Updated changelog",
          "timestamp": "2024-01-10T15:54:01+09:00",
          "tree_id": "4f1cc9e9cdd7817b323f20fb67af5ad2931a41b8",
          "url": "https://github.com/greymistcube/libplanet/commit/62240d10330c147e4ada92b787ce0d35985adac1"
        },
        "date": 1704870327953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3823329.4143415177,
            "unit": "ns",
            "range": "± 45861.96116592761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231071.7361778845,
            "unit": "ns",
            "range": "± 10013.968786159787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772253.6491699219,
            "unit": "ns",
            "range": "± 2972.0214085585885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938784.1349158655,
            "unit": "ns",
            "range": "± 6832.476186985721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624324.2714301215,
            "unit": "ns",
            "range": "± 13228.660226312666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580095.3537760417,
            "unit": "ns",
            "range": "± 1882.878317388383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2478429.972222222,
            "unit": "ns",
            "range": "± 82597.33230506595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2495942.269230769,
            "unit": "ns",
            "range": "± 30227.538642088843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3377122.6363636362,
            "unit": "ns",
            "range": "± 114964.80542496289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3316784.1555555556,
            "unit": "ns",
            "range": "± 116759.03180481576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13899291.472527472,
            "unit": "ns",
            "range": "± 825206.0139969541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40964.17010309279,
            "unit": "ns",
            "range": "± 6575.308151400031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205882.34,
            "unit": "ns",
            "range": "± 9729.198136509476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199470.95,
            "unit": "ns",
            "range": "± 6954.337830742949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173594.125,
            "unit": "ns",
            "range": "± 3402.3481278865825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3321527,
            "unit": "ns",
            "range": "± 43838.88353391313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931659.153846154,
            "unit": "ns",
            "range": "± 46079.612894146136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20097.52,
            "unit": "ns",
            "range": "± 6179.194082131299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66225.45348837209,
            "unit": "ns",
            "range": "± 7994.943492655368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71793.04,
            "unit": "ns",
            "range": "± 17028.179219568294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84154.52040816327,
            "unit": "ns",
            "range": "± 15455.625031623147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6894.275510204082,
            "unit": "ns",
            "range": "± 715.628003068291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13674.122448979591,
            "unit": "ns",
            "range": "± 1952.9344680244815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5784540.433333334,
            "unit": "ns",
            "range": "± 70608.31225800408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14751228.166666666,
            "unit": "ns",
            "range": "± 168177.7320586199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36707714.307692304,
            "unit": "ns",
            "range": "± 115640.07654023223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76359961.64285715,
            "unit": "ns",
            "range": "± 495436.5416615093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155412261.26666668,
            "unit": "ns",
            "range": "± 1289011.0913571063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022115,
            "unit": "ns",
            "range": "± 101498.09416704171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986187.9473684211,
            "unit": "ns",
            "range": "± 79913.9031336272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694748.3535353534,
            "unit": "ns",
            "range": "± 158607.1221553892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12836175.39,
            "unit": "ns",
            "range": "± 1066013.7770117829"
          }
        ]
      }
    ]
  }
}