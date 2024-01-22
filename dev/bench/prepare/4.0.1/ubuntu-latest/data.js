window.BENCHMARK_DATA = {
  "lastUpdate": 1705914861271,
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
          "id": "63dd3675c3120f11d2499b653d82e4c35fa8554a",
          "message": "Prepare 4.0.1",
          "timestamp": "2024-01-22T18:02:55+09:00",
          "tree_id": "944c887df52a61c35d84f4f3b2a40b6b0e31e8b6",
          "url": "https://github.com/greymistcube/libplanet/commit/63dd3675c3120f11d2499b653d82e4c35fa8554a"
        },
        "date": 1705914851492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748822.3665865385,
            "unit": "ns",
            "range": "± 23230.550918234607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222601.8413461538,
            "unit": "ns",
            "range": "± 1531.541280993426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751352.7244466146,
            "unit": "ns",
            "range": "± 2327.514689349799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956655.1724330357,
            "unit": "ns",
            "range": "± 2738.312768630097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610415.9522235577,
            "unit": "ns",
            "range": "± 1053.1113942290478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570676.8490084135,
            "unit": "ns",
            "range": "± 876.4378842677161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480928.2073170734,
            "unit": "ns",
            "range": "± 87182.87905381536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519929.763157895,
            "unit": "ns",
            "range": "± 67522.02222075571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191868.214285714,
            "unit": "ns",
            "range": "± 22720.186033835373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3219631.0555555555,
            "unit": "ns",
            "range": "± 105721.15981768657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13833387.022222223,
            "unit": "ns",
            "range": "± 919328.3883982151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41963.10824742268,
            "unit": "ns",
            "range": "± 5460.517513166489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202609.31818181818,
            "unit": "ns",
            "range": "± 7467.734966126803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196264.75268817204,
            "unit": "ns",
            "range": "± 10824.377864094258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169764.61538461538,
            "unit": "ns",
            "range": "± 5873.716525494088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3268892.7,
            "unit": "ns",
            "range": "± 31503.939434390017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861248.8571428573,
            "unit": "ns",
            "range": "± 44553.871212028505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16855.969387755104,
            "unit": "ns",
            "range": "± 2365.8868717195414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63019.77419354839,
            "unit": "ns",
            "range": "± 5031.45967697903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93428.43956043955,
            "unit": "ns",
            "range": "± 5799.12682930953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73575.14432989691,
            "unit": "ns",
            "range": "± 15283.661768092486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4946.09,
            "unit": "ns",
            "range": "± 2005.1383493163235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16422.40860215054,
            "unit": "ns",
            "range": "± 1770.7999926130112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5563077.576923077,
            "unit": "ns",
            "range": "± 34256.16384064221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14824015.916666666,
            "unit": "ns",
            "range": "± 115072.05609566267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36391690.84615385,
            "unit": "ns",
            "range": "± 154852.46304835135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74936245.3,
            "unit": "ns",
            "range": "± 570564.7698929793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148733723.86666667,
            "unit": "ns",
            "range": "± 743072.8857768228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988660.5684210527,
            "unit": "ns",
            "range": "± 90925.55049876381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901870.888888889,
            "unit": "ns",
            "range": "± 71326.47973076218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612052.677419355,
            "unit": "ns",
            "range": "± 138719.707552297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12857639.844444444,
            "unit": "ns",
            "range": "± 974053.8753489524"
          }
        ]
      }
    ]
  }
}