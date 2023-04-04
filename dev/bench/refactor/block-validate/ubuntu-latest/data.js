window.BENCHMARK_DATA = {
  "lastUpdate": 1680579564263,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579555661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3842318.6904761903,
            "unit": "ns",
            "range": "± 140066.73900323166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4192050.153846154,
            "unit": "ns",
            "range": "± 145841.56743779377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4850366.7272727275,
            "unit": "ns",
            "range": "± 116176.5273801578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5202280.048387097,
            "unit": "ns",
            "range": "± 234579.31751048757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8894599.181818182,
            "unit": "ns",
            "range": "± 216088.59729984132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11227880.233333332,
            "unit": "ns",
            "range": "± 333032.81729023537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26399777,
            "unit": "ns",
            "range": "± 191791.44512092145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65230140.8,
            "unit": "ns",
            "range": "± 291560.9204210037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136599836.23076922,
            "unit": "ns",
            "range": "± 2175861.3233771794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246223087.25,
            "unit": "ns",
            "range": "± 5405035.61890172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523464.2083333333,
            "unit": "ns",
            "range": "± 117531.34587172607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958418.126984127,
            "unit": "ns",
            "range": "± 133896.88299468847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538677.077777778,
            "unit": "ns",
            "range": "± 141061.6037609123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613823.65,
            "unit": "ns",
            "range": "± 428709.92677836446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55238.22580645161,
            "unit": "ns",
            "range": "± 3757.0864640645714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6804246.40625,
            "unit": "ns",
            "range": "± 39511.72915873127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172672.7356770835,
            "unit": "ns",
            "range": "± 21412.330629496104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1545584.1440104167,
            "unit": "ns",
            "range": "± 8608.477091278415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3051426.808854167,
            "unit": "ns",
            "range": "± 16880.366509986427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962638.7865234375,
            "unit": "ns",
            "range": "± 5321.656600979463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912048.4655598958,
            "unit": "ns",
            "range": "± 7932.501106320546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388495.7358490566,
            "unit": "ns",
            "range": "± 16209.5343122864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317593.6034482759,
            "unit": "ns",
            "range": "± 13819.207153406443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269807.6666666667,
            "unit": "ns",
            "range": "± 10449.306908367093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6612617.764705882,
            "unit": "ns",
            "range": "± 135492.54207682863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4645437.90625,
            "unit": "ns",
            "range": "± 141191.60064032854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21403.626373626375,
            "unit": "ns",
            "range": "± 1232.6926772841791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103035.32857142857,
            "unit": "ns",
            "range": "± 4998.276876190023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92149.0306122449,
            "unit": "ns",
            "range": "± 8813.390816221961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213307.2142857143,
            "unit": "ns",
            "range": "± 19492.8921987784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6914.010416666667,
            "unit": "ns",
            "range": "± 722.887492080296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20377.774193548386,
            "unit": "ns",
            "range": "± 1511.2508217643128"
          }
        ]
      }
    ]
  }
}