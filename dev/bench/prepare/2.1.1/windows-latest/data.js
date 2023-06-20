window.BENCHMARK_DATA = {
  "lastUpdate": 1687252731370,
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
          "id": "9ba8c21ea9836b0b51f43ea99013cda45d76958f",
          "message": "Prepare 2.1.1",
          "timestamp": "2023-06-20T17:58:10+09:00",
          "tree_id": "d623fe48c67fa1f2775ded58df2ab190f7f15808",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba8c21ea9836b0b51f43ea99013cda45d76958f"
        },
        "date": 1687252706122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656406,
            "unit": "ns",
            "range": "± 115974.75240740804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981720.212765957,
            "unit": "ns",
            "range": "± 168965.93254631115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2487071.4285714286,
            "unit": "ns",
            "range": "± 116768.63677444168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6563167.021276596,
            "unit": "ns",
            "range": "± 399365.62959900586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53717.391304347824,
            "unit": "ns",
            "range": "± 4262.11547060362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8843667.105263159,
            "unit": "ns",
            "range": "± 448673.9931214074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24933533.333333332,
            "unit": "ns",
            "range": "± 387431.03841046285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60221506.451612905,
            "unit": "ns",
            "range": "± 1803059.3831846812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121414635.71428572,
            "unit": "ns",
            "range": "± 1655113.8913204004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245233775,
            "unit": "ns",
            "range": "± 4799650.3662246065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5802380.9375,
            "unit": "ns",
            "range": "± 53182.42484665169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884865.0716145833,
            "unit": "ns",
            "range": "± 14379.754019491045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422918.833705357,
            "unit": "ns",
            "range": "± 13048.067347831418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3182518.0245535714,
            "unit": "ns",
            "range": "± 26047.61375441651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995692.6081730769,
            "unit": "ns",
            "range": "± 5334.04527353693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925796.1635044643,
            "unit": "ns",
            "range": "± 4968.036295757833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838545.7627118644,
            "unit": "ns",
            "range": "± 169340.42465221052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4249772.972972973,
            "unit": "ns",
            "range": "± 143742.84648606315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5021672.5,
            "unit": "ns",
            "range": "± 174911.88255877988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5163983.870967742,
            "unit": "ns",
            "range": "± 157072.2553408127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7958667.567567567,
            "unit": "ns",
            "range": "± 268168.0091680235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300005.2631578947,
            "unit": "ns",
            "range": "± 19720.55504171765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284284.5070422535,
            "unit": "ns",
            "range": "± 13637.392376292095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270753.125,
            "unit": "ns",
            "range": "± 19071.620984428257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4800269.230769231,
            "unit": "ns",
            "range": "± 166780.7340158521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4169516.0714285714,
            "unit": "ns",
            "range": "± 179116.062704692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21792.391304347828,
            "unit": "ns",
            "range": "± 2058.444611551317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98329.16666666667,
            "unit": "ns",
            "range": "± 8226.82283965613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84673.68421052632,
            "unit": "ns",
            "range": "± 7454.274948350047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104291.75257731958,
            "unit": "ns",
            "range": "± 16840.215198688657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5849.484536082474,
            "unit": "ns",
            "range": "± 969.4418187093761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21994.62365591398,
            "unit": "ns",
            "range": "± 1888.5447348477799"
          }
        ]
      }
    ]
  }
}