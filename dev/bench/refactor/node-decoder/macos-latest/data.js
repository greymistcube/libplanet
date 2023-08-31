window.BENCHMARK_DATA = {
  "lastUpdate": 1693448573079,
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
          "id": "571d2e2ecda5fef58ff55aa70421c94e053a5be9",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T10:55:48+09:00",
          "tree_id": "f99d98bba7f37125fa41427b2ed6228f30cb9410",
          "url": "https://github.com/greymistcube/libplanet/commit/571d2e2ecda5fef58ff55aa70421c94e053a5be9"
        },
        "date": 1693448556541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11408614.351063829,
            "unit": "ns",
            "range": "± 2886967.5174726234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33065989.333333332,
            "unit": "ns",
            "range": "± 3880688.0135246734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78395866.76530612,
            "unit": "ns",
            "range": "± 18440090.331892952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143628315.4375,
            "unit": "ns",
            "range": "± 42576932.364663914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309564980.22,
            "unit": "ns",
            "range": "± 70950211.17522338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80233.90697674418,
            "unit": "ns",
            "range": "± 11153.310869426548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363580.86516853934,
            "unit": "ns",
            "range": "± 32140.903565815763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341895.5879120879,
            "unit": "ns",
            "range": "± 40864.226619283836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317069.1529411765,
            "unit": "ns",
            "range": "± 29132.35067122275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4351208.057471264,
            "unit": "ns",
            "range": "± 325772.1398386886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783991.210526316,
            "unit": "ns",
            "range": "± 130359.29933221838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24044.67032967033,
            "unit": "ns",
            "range": "± 4170.452006024568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113312.54945054946,
            "unit": "ns",
            "range": "± 15017.32905624827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114237.05681818182,
            "unit": "ns",
            "range": "± 10494.104110270411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116218.53125,
            "unit": "ns",
            "range": "± 20958.185922376677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7409.416666666667,
            "unit": "ns",
            "range": "± 1583.5471153921087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24109.21978021978,
            "unit": "ns",
            "range": "± 3551.2706483492098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1782358.9494382022,
            "unit": "ns",
            "range": "± 271324.54033663566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3347777.061797753,
            "unit": "ns",
            "range": "± 566011.2058593964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2482630.4725274723,
            "unit": "ns",
            "range": "± 454869.98365150305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7296485.203296703,
            "unit": "ns",
            "range": "± 1373555.1897735347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3804974.715909091,
            "unit": "ns",
            "range": "± 621778.0616985518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586759.05,
            "unit": "ns",
            "range": "± 81177.15026213706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4687483.318181818,
            "unit": "ns",
            "range": "± 541054.1717159908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4648726.287356322,
            "unit": "ns",
            "range": "± 610024.5232635174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9481088.367346939,
            "unit": "ns",
            "range": "± 2604261.8579131053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5880591.000244141,
            "unit": "ns",
            "range": "± 181745.4993860006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2249902.533222656,
            "unit": "ns",
            "range": "± 378743.5762506085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399528.344375,
            "unit": "ns",
            "range": "± 298321.25822204456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4403329.660873724,
            "unit": "ns",
            "range": "± 1073745.9066219728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908897.0279060133,
            "unit": "ns",
            "range": "± 56096.06955821274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838687.7708412729,
            "unit": "ns",
            "range": "± 30137.351425597266"
          }
        ]
      }
    ]
  }
}