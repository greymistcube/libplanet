window.BENCHMARK_DATA = {
  "lastUpdate": 1704435315366,
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
          "id": "7e8c0091a0e73ec237800d4e3dc1839ae3772537",
          "message": "Test fixes",
          "timestamp": "2024-01-05T14:54:52+09:00",
          "tree_id": "9696fabb7b18492c9aa28c897bf27a3d37462adc",
          "url": "https://github.com/greymistcube/libplanet/commit/7e8c0091a0e73ec237800d4e3dc1839ae3772537"
        },
        "date": 1704435292187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7910755.771739131,
            "unit": "ns",
            "range": "± 484746.0942320784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19291735.492063493,
            "unit": "ns",
            "range": "± 878591.802204507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49330906.06060606,
            "unit": "ns",
            "range": "± 3420503.9183659763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98627090.42405063,
            "unit": "ns",
            "range": "± 5091782.334533228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204849094.6530612,
            "unit": "ns",
            "range": "± 14561831.726391353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47385.35051546392,
            "unit": "ns",
            "range": "± 14654.032485435277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237874.46391752578,
            "unit": "ns",
            "range": "± 26253.01949342441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223128.80107526883,
            "unit": "ns",
            "range": "± 21219.479861256765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203367.16129032258,
            "unit": "ns",
            "range": "± 19842.950153912578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3915351,
            "unit": "ns",
            "range": "± 91675.8480326198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3455316.7,
            "unit": "ns",
            "range": "± 63956.185724737705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13918.445652173914,
            "unit": "ns",
            "range": "± 2496.530715292418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64772.02105263158,
            "unit": "ns",
            "range": "± 12084.008821208361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58069.32967032967,
            "unit": "ns",
            "range": "± 9069.52857902027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67917.22916666667,
            "unit": "ns",
            "range": "± 13358.664731160874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3707.736263736264,
            "unit": "ns",
            "range": "± 629.6021995437513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14132.876344086022,
            "unit": "ns",
            "range": "± 2510.803984843078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1105017.4591836734,
            "unit": "ns",
            "range": "± 126906.40821886728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2266679.2033898304,
            "unit": "ns",
            "range": "± 99958.31009023637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756223.0860215053,
            "unit": "ns",
            "range": "± 131996.2587302198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19237729.569892474,
            "unit": "ns",
            "range": "± 2359837.7106785853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2956385.8260869565,
            "unit": "ns",
            "range": "± 251786.28157438867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426057.87,
            "unit": "ns",
            "range": "± 460645.16979419236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3706814.0263157897,
            "unit": "ns",
            "range": "± 254508.6155657788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3835358.2010309277,
            "unit": "ns",
            "range": "± 345963.175281891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23398071.168421052,
            "unit": "ns",
            "range": "± 4073801.719506793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5974138.155184659,
            "unit": "ns",
            "range": "± 279983.3906285617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878968.9399571572,
            "unit": "ns",
            "range": "± 85490.00181861527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242298.556640625,
            "unit": "ns",
            "range": "± 21929.216917020076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2761890.01328125,
            "unit": "ns",
            "range": "± 311824.461684492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821600.8413332545,
            "unit": "ns",
            "range": "± 82143.29608664452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749272.9734503777,
            "unit": "ns",
            "range": "± 64336.70865896853"
          }
        ]
      }
    ]
  }
}