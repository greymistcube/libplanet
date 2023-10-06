window.BENCHMARK_DATA = {
  "lastUpdate": 1696597983964,
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
          "id": "1722d4fb254d6e1366b926fc53cabd07dbede07e",
          "message": "Prepare 3.7.0",
          "timestamp": "2023-10-06T21:54:42+09:00",
          "tree_id": "cbd6e25eb97c88fc010844922b0bba97a7b24078",
          "url": "https://github.com/greymistcube/libplanet/commit/1722d4fb254d6e1366b926fc53cabd07dbede07e"
        },
        "date": 1696597965588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9338332.4,
            "unit": "ns",
            "range": "± 546043.4059925172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23274854.9375,
            "unit": "ns",
            "range": "± 406117.6497161003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60621093.90206186,
            "unit": "ns",
            "range": "± 6375172.885405946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109389066.92,
            "unit": "ns",
            "range": "± 2917458.9334459067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224092012.57575756,
            "unit": "ns",
            "range": "± 10464605.58904681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71032.93617021276,
            "unit": "ns",
            "range": "± 9164.98496887763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324993.90425531915,
            "unit": "ns",
            "range": "± 37775.78753683858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306178.9835164835,
            "unit": "ns",
            "range": "± 25577.88297571106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290221.60638297873,
            "unit": "ns",
            "range": "± 19364.344409036592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3984635.8225806453,
            "unit": "ns",
            "range": "± 117914.14587610969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702753.846153846,
            "unit": "ns",
            "range": "± 97745.48725284141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19935.224489795917,
            "unit": "ns",
            "range": "± 3065.0732506025065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99426.10638297872,
            "unit": "ns",
            "range": "± 17418.397116155316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106655.125,
            "unit": "ns",
            "range": "± 13586.483499870059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101878.68085106384,
            "unit": "ns",
            "range": "± 13609.279909697267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5634.5368421052635,
            "unit": "ns",
            "range": "± 1475.071147296179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16111.655555555555,
            "unit": "ns",
            "range": "± 1583.1220605741853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449699.621212121,
            "unit": "ns",
            "range": "± 136282.08437463583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2756797.160714286,
            "unit": "ns",
            "range": "± 115948.74618449101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285426.1413043477,
            "unit": "ns",
            "range": "± 193702.46818777182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10663856.120481927,
            "unit": "ns",
            "range": "± 718474.3434926743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438485.205882353,
            "unit": "ns",
            "range": "± 274342.19915727177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667617.1153846155,
            "unit": "ns",
            "range": "± 278196.8057075889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4445153.121052631,
            "unit": "ns",
            "range": "± 316458.88395517156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4433269.234693877,
            "unit": "ns",
            "range": "± 330004.1509065884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15851368.168421052,
            "unit": "ns",
            "range": "± 1946488.1450335805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5402304.183894231,
            "unit": "ns",
            "range": "± 45140.4827221263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1679652.6694010417,
            "unit": "ns",
            "range": "± 19557.736075100667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1018687.013811384,
            "unit": "ns",
            "range": "± 12585.474801964025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566419.8175223214,
            "unit": "ns",
            "range": "± 68670.10596524009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819780.4720703125,
            "unit": "ns",
            "range": "± 12720.551944300914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697033.3090122768,
            "unit": "ns",
            "range": "± 3266.3683287224558"
          }
        ]
      }
    ]
  }
}