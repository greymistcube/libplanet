window.BENCHMARK_DATA = {
  "lastUpdate": 1686129360134,
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
          "id": "2cb975586bfddbf420ba1e963e66498c7f97476f",
          "message": "Prepare 2.0.0",
          "timestamp": "2023-06-07T18:03:50+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb975586bfddbf420ba1e963e66498c7f97476f"
        },
        "date": 1686129352186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319461.2592592593,
            "unit": "ns",
            "range": "± 69020.54801556886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613438.052631579,
            "unit": "ns",
            "range": "± 88451.6533596247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140508.402061856,
            "unit": "ns",
            "range": "± 156340.6675369168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5245533.548387097,
            "unit": "ns",
            "range": "± 157032.1651481714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151768.214285714,
            "unit": "ns",
            "range": "± 35417.40073462059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3262999.8076923075,
            "unit": "ns",
            "range": "± 75887.16801990663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4200591.7727272725,
            "unit": "ns",
            "range": "± 102305.94935497192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083341.8333333335,
            "unit": "ns",
            "range": "± 135280.34879200198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6642252.966666667,
            "unit": "ns",
            "range": "± 174717.2916629414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7640226.5,
            "unit": "ns",
            "range": "± 36771.742917521704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19190839.866666667,
            "unit": "ns",
            "range": "± 135997.86389176783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48746742.13333333,
            "unit": "ns",
            "range": "± 357626.3856314829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96314393.66666667,
            "unit": "ns",
            "range": "± 811632.2838014821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197339817.33333334,
            "unit": "ns",
            "range": "± 3243392.4577152827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009130.695833334,
            "unit": "ns",
            "range": "± 31557.885292596686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843501.2035757212,
            "unit": "ns",
            "range": "± 3771.16957407891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387669.073828125,
            "unit": "ns",
            "range": "± 977.2448042470016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554670.995833333,
            "unit": "ns",
            "range": "± 3485.0286881721963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791587.3755208333,
            "unit": "ns",
            "range": "± 540.7554269869239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737405.5159505209,
            "unit": "ns",
            "range": "± 654.4622049344856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46540.950617283954,
            "unit": "ns",
            "range": "± 2326.691282171071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280157.56603773584,
            "unit": "ns",
            "range": "± 11634.064222243487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264262.01851851854,
            "unit": "ns",
            "range": "± 11078.758060787404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229229.42857142858,
            "unit": "ns",
            "range": "± 2145.8705858994786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183107.4285714286,
            "unit": "ns",
            "range": "± 47185.08076095221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744184.5,
            "unit": "ns",
            "range": "± 33795.867557462385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16392.82474226804,
            "unit": "ns",
            "range": "± 1419.2178377712528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82180.11235955056,
            "unit": "ns",
            "range": "± 4546.892831269509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68514.5,
            "unit": "ns",
            "range": "± 1138.7665222984438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81356.23655913978,
            "unit": "ns",
            "range": "± 8806.200577851074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4311.479166666667,
            "unit": "ns",
            "range": "± 495.63305567445053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16564.989361702126,
            "unit": "ns",
            "range": "± 1327.4820088259492"
          }
        ]
      }
    ]
  }
}