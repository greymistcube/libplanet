window.BENCHMARK_DATA = {
  "lastUpdate": 1689839736845,
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
          "id": "44bbbc01223ed47ee09dd0d2667ecd9c5166367d",
          "message": "Hide TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-20T16:39:16+09:00",
          "tree_id": "77f12de69d9e969b1c90fff7a2b3bfb978853b6c",
          "url": "https://github.com/greymistcube/libplanet/commit/44bbbc01223ed47ee09dd0d2667ecd9c5166367d"
        },
        "date": 1689839714324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516753.3333333333,
            "unit": "ns",
            "range": "± 23190.695999740517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2449780.701754386,
            "unit": "ns",
            "range": "± 105463.67255159558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707726.2626262626,
            "unit": "ns",
            "range": "± 103397.63209882812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4514747.826086956,
            "unit": "ns",
            "range": "± 170402.6127722622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45095.744680851065,
            "unit": "ns",
            "range": "± 2717.08710620645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6975500,
            "unit": "ns",
            "range": "± 62261.2583049386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17703793.333333332,
            "unit": "ns",
            "range": "± 112570.31114988068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46010685.71428572,
            "unit": "ns",
            "range": "± 350821.92909518344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91651615.38461539,
            "unit": "ns",
            "range": "± 264999.0749862907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188214770,
            "unit": "ns",
            "range": "± 3193475.4073624196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886077.764423077,
            "unit": "ns",
            "range": "± 6506.525214190224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518501.796875,
            "unit": "ns",
            "range": "± 1957.7501544935283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158508.0989583333,
            "unit": "ns",
            "range": "± 1356.7089514560191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547520.8984375,
            "unit": "ns",
            "range": "± 6990.658998072758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822367.6822916666,
            "unit": "ns",
            "range": "± 1215.481461105708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755045.5891927084,
            "unit": "ns",
            "range": "± 1779.5093518183426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3035885.714285714,
            "unit": "ns",
            "range": "± 80814.12639638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3217025.581395349,
            "unit": "ns",
            "range": "± 116306.40176669486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4014343.243243243,
            "unit": "ns",
            "range": "± 134263.6410213141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3573076.923076923,
            "unit": "ns",
            "range": "± 54134.47998343499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6061189.361702127,
            "unit": "ns",
            "range": "± 232285.58250758497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254576.92307692306,
            "unit": "ns",
            "range": "± 10488.436496963195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246000,
            "unit": "ns",
            "range": "± 9271.92732734874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224612,
            "unit": "ns",
            "range": "± 15771.83450446915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3867371.4285714286,
            "unit": "ns",
            "range": "± 42658.41387962373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492700,
            "unit": "ns",
            "range": "± 41461.67832144243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19987.36842105263,
            "unit": "ns",
            "range": "± 2123.387603809874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82254.11764705883,
            "unit": "ns",
            "range": "± 4421.741548228224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68271.97802197802,
            "unit": "ns",
            "range": "± 3836.92012478186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89828.86597938144,
            "unit": "ns",
            "range": "± 12969.242129320228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4505.154639175258,
            "unit": "ns",
            "range": "± 728.7791066257975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17994.62365591398,
            "unit": "ns",
            "range": "± 1749.121866102472"
          }
        ]
      }
    ]
  }
}