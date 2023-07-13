window.BENCHMARK_DATA = {
  "lastUpdate": 1689255717853,
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
          "id": "ba9389cb4ed6646f6d800bba871490927b0b4eae",
          "message": "Proofreading",
          "timestamp": "2023-07-13T22:14:15+09:00",
          "tree_id": "69062a506833fe2795b227937298e6db95638349",
          "url": "https://github.com/greymistcube/libplanet/commit/ba9389cb4ed6646f6d800bba871490927b0b4eae"
        },
        "date": 1689255708159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380432.6703296703,
            "unit": "ns",
            "range": "± 28222.524171722194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366610.347826087,
            "unit": "ns",
            "range": "± 32108.42469277049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321213.7021276596,
            "unit": "ns",
            "range": "± 24884.210439134593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5608850.753846154,
            "unit": "ns",
            "range": "± 260402.63147756102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4912960.016949153,
            "unit": "ns",
            "range": "± 207723.16363981698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23486.98888888889,
            "unit": "ns",
            "range": "± 4070.9753586409324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142667.48958333334,
            "unit": "ns",
            "range": "± 18071.85589979757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 160263.44086021505,
            "unit": "ns",
            "range": "± 24816.423636314074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276385.9789473684,
            "unit": "ns",
            "range": "± 41195.69407729636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12825.436781609196,
            "unit": "ns",
            "range": "± 3732.469288962735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30692.573033707864,
            "unit": "ns",
            "range": "± 2231.33706801163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727905.1263157895,
            "unit": "ns",
            "range": "± 142103.35856821563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3372840.350515464,
            "unit": "ns",
            "range": "± 232799.08220578326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2272338.3131313133,
            "unit": "ns",
            "range": "± 212319.2273104993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6903271,
            "unit": "ns",
            "range": "± 431431.7387973394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8847935.16773897,
            "unit": "ns",
            "range": "± 278017.2541745048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2865532.510766006,
            "unit": "ns",
            "range": "± 102657.62564407106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1892927.6800242458,
            "unit": "ns",
            "range": "± 54075.61067293615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4920145.3759375,
            "unit": "ns",
            "range": "± 374369.1055607891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1221866.9297672193,
            "unit": "ns",
            "range": "± 70853.05568254669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1088282.738908179,
            "unit": "ns",
            "range": "± 54819.14121027717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3958831.0677966103,
            "unit": "ns",
            "range": "± 174961.4146920109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4499100.380434782,
            "unit": "ns",
            "range": "± 300491.30501113215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5699984.957894737,
            "unit": "ns",
            "range": "± 366127.13874443906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4705317.638297873,
            "unit": "ns",
            "range": "± 306784.9187708615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8531565.535211267,
            "unit": "ns",
            "range": "± 416918.1050927261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9664981.204545455,
            "unit": "ns",
            "range": "± 336082.56916270393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27551200.81081081,
            "unit": "ns",
            "range": "± 934554.0908443342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72046465.36065574,
            "unit": "ns",
            "range": "± 3223189.940460237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142637182.5882353,
            "unit": "ns",
            "range": "± 2791222.7617579866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275467629.0285714,
            "unit": "ns",
            "range": "± 8681348.106738375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55690.68539325843,
            "unit": "ns",
            "range": "± 5196.922329162944"
          }
        ]
      }
    ]
  }
}