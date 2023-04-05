window.BENCHMARK_DATA = {
  "lastUpdate": 1680683973335,
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
          "id": "1faba70c08b30f355a4a8e72c7f5ebd93ceb071b",
          "message": "Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:18:33+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/1faba70c08b30f355a4a8e72c7f5ebd93ceb071b"
        },
        "date": 1680683948021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730892.6315789474,
            "unit": "ns",
            "range": "± 198284.30493467365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269438.5416666665,
            "unit": "ns",
            "range": "± 310894.9862878195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2804758.762886598,
            "unit": "ns",
            "range": "± 274516.80798289983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7723911.340206185,
            "unit": "ns",
            "range": "± 517978.42677009903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70604.04040404041,
            "unit": "ns",
            "range": "± 18333.224658136325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8401383.333333334,
            "unit": "ns",
            "range": "± 218134.3228749019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23808571.42857143,
            "unit": "ns",
            "range": "± 1527440.8090510871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61777795.3125,
            "unit": "ns",
            "range": "± 2830503.5158346444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124069696.77419356,
            "unit": "ns",
            "range": "± 3784641.4828429804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246404136.36363637,
            "unit": "ns",
            "range": "± 7291787.120102064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948302.5,
            "unit": "ns",
            "range": "± 101394.66276300435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958313.0112591912,
            "unit": "ns",
            "range": "± 36834.29024998876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473188.8521634615,
            "unit": "ns",
            "range": "± 14454.641714095162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3528042.6897321427,
            "unit": "ns",
            "range": "± 46859.21163926682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1082941.26953125,
            "unit": "ns",
            "range": "± 15877.500159483296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003702.4544270834,
            "unit": "ns",
            "range": "± 12204.933621664053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3642271.7391304346,
            "unit": "ns",
            "range": "± 220697.4510655533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3808672.9166666665,
            "unit": "ns",
            "range": "± 383072.2783192053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4982373.195876288,
            "unit": "ns",
            "range": "± 458328.13698163355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5673352.577319588,
            "unit": "ns",
            "range": "± 537396.4028250746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9575176.530612245,
            "unit": "ns",
            "range": "± 763551.5995095632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 439757.30337078654,
            "unit": "ns",
            "range": "± 51785.606739448645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359529.347826087,
            "unit": "ns",
            "range": "± 27146.03785082763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319209.0909090909,
            "unit": "ns",
            "range": "± 51292.80112378641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6932481.25,
            "unit": "ns",
            "range": "± 359721.61532227014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4965164.705882353,
            "unit": "ns",
            "range": "± 158432.00985558625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25370.833333333332,
            "unit": "ns",
            "range": "± 7668.155843166446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 144055.10204081633,
            "unit": "ns",
            "range": "± 30461.05887393673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109849.48453608247,
            "unit": "ns",
            "range": "± 27154.665512698353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276033.3333333333,
            "unit": "ns",
            "range": "± 33798.3981765149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13098.888888888889,
            "unit": "ns",
            "range": "± 1865.5055912837975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34895.744680851065,
            "unit": "ns",
            "range": "± 3905.41159957157"
          }
        ]
      }
    ]
  }
}