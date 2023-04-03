window.BENCHMARK_DATA = {
  "lastUpdate": 1680508656661,
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
          "id": "feb9a091c2bf34984c125cb6fa6641b2d70b6620",
          "message": "[skip changelog] Separate block validation related code",
          "timestamp": "2023-04-03T16:39:37+09:00",
          "tree_id": "68febb310cb06ee0c765e5c728e72392a040515b",
          "url": "https://github.com/greymistcube/libplanet/commit/feb9a091c2bf34984c125cb6fa6641b2d70b6620"
        },
        "date": 1680508633351,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342737.1134020619,
            "unit": "ns",
            "range": "± 113200.11255845739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2433743.4782608696,
            "unit": "ns",
            "range": "± 59167.88000017759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2127216.1616161615,
            "unit": "ns",
            "range": "± 127780.60335309007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5125125,
            "unit": "ns",
            "range": "± 144387.77168136887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42058.333333333336,
            "unit": "ns",
            "range": "± 1745.6281144975565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6952028.571428572,
            "unit": "ns",
            "range": "± 60243.600727143035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17444713.333333332,
            "unit": "ns",
            "range": "± 139767.3570446193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44897120,
            "unit": "ns",
            "range": "± 356192.5767254081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88701086.66666667,
            "unit": "ns",
            "range": "± 1019929.7691974866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176694078.57142857,
            "unit": "ns",
            "range": "± 1148398.3918608436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828805.348557692,
            "unit": "ns",
            "range": "± 4716.846956106561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524955.2473958333,
            "unit": "ns",
            "range": "± 1506.0800559232937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141226.646205357,
            "unit": "ns",
            "range": "± 981.5708612241068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732963.203125,
            "unit": "ns",
            "range": "± 16711.12102804241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804217.83203125,
            "unit": "ns",
            "range": "± 1560.3983458358327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757978.8016183035,
            "unit": "ns",
            "range": "± 827.2404155664917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2907040,
            "unit": "ns",
            "range": "± 35661.49984827575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3085126.086956522,
            "unit": "ns",
            "range": "± 76405.31405478467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3866350,
            "unit": "ns",
            "range": "± 53774.99776490358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3954435,
            "unit": "ns",
            "range": "± 139415.39765235438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6901135,
            "unit": "ns",
            "range": "± 110032.94375107082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290250,
            "unit": "ns",
            "range": "± 7294.435763199802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234926.5306122449,
            "unit": "ns",
            "range": "± 7439.975792697068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213842.1875,
            "unit": "ns",
            "range": "± 9856.410446248707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5193413.333333333,
            "unit": "ns",
            "range": "± 47815.59618048528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649800,
            "unit": "ns",
            "range": "± 49849.12952385141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17245.833333333332,
            "unit": "ns",
            "range": "± 1636.9365911692398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82285.5421686747,
            "unit": "ns",
            "range": "± 4402.663620873843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70302.04081632652,
            "unit": "ns",
            "range": "± 5001.715779668502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153497.95918367346,
            "unit": "ns",
            "range": "± 15066.377050957397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5034.020618556701,
            "unit": "ns",
            "range": "± 710.3236641868128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16150.526315789473,
            "unit": "ns",
            "range": "± 1453.8923314792448"
          }
        ]
      }
    ]
  }
}