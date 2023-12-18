window.BENCHMARK_DATA = {
  "lastUpdate": 1702893671209,
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
          "id": "20a83c7e16aa91de2331c52fadddcf7473abc4e5",
          "message": "Removed updated addresses from IRichStore",
          "timestamp": "2023-12-18T18:50:02+09:00",
          "tree_id": "4c182bfa4a5a7e0262c2321d7e3df1f7ed1be87e",
          "url": "https://github.com/greymistcube/libplanet/commit/20a83c7e16aa91de2331c52fadddcf7473abc4e5"
        },
        "date": 1702893664876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752081.434151786,
            "unit": "ns",
            "range": "± 33958.244712213964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203689.7991536458,
            "unit": "ns",
            "range": "± 2841.788524411353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781649.1837565104,
            "unit": "ns",
            "range": "± 842.8369158797316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953906.4827473958,
            "unit": "ns",
            "range": "± 3364.258733425791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625208.9182477678,
            "unit": "ns",
            "range": "± 764.4840063678598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583925.6709798177,
            "unit": "ns",
            "range": "± 1255.9732970292807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435398.714285714,
            "unit": "ns",
            "range": "± 20498.98363494966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529053.3333333335,
            "unit": "ns",
            "range": "± 35737.314627844156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121707.09375,
            "unit": "ns",
            "range": "± 96821.9961298649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2928197.6525423727,
            "unit": "ns",
            "range": "± 128601.93974603125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6972398.464285715,
            "unit": "ns",
            "range": "± 198359.06334734423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41756.44680851064,
            "unit": "ns",
            "range": "± 5402.993759172444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203559.41666666666,
            "unit": "ns",
            "range": "± 8994.914439426251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202069.97826086957,
            "unit": "ns",
            "range": "± 11485.703976452078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164947.17647058822,
            "unit": "ns",
            "range": "± 3314.831749789386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113579,
            "unit": "ns",
            "range": "± 35568.74819708577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2900591.4166666665,
            "unit": "ns",
            "range": "± 37861.962914245436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15271.630434782608,
            "unit": "ns",
            "range": "± 2558.8544557393157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64088.32258064516,
            "unit": "ns",
            "range": "± 5427.179868918412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88571.82978723405,
            "unit": "ns",
            "range": "± 11248.797174062178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93045.2258064516,
            "unit": "ns",
            "range": "± 6636.438704359296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6439.232323232323,
            "unit": "ns",
            "range": "± 1564.230121832011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15903.454545454546,
            "unit": "ns",
            "range": "± 5518.393354015959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5565284.733333333,
            "unit": "ns",
            "range": "± 19575.15427951123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14196016.357142856,
            "unit": "ns",
            "range": "± 94780.33063523346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36465075,
            "unit": "ns",
            "range": "± 285720.88557691604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74288754.53846154,
            "unit": "ns",
            "range": "± 417065.630306873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149476472.07692307,
            "unit": "ns",
            "range": "± 702584.6673931266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965155.5483870967,
            "unit": "ns",
            "range": "± 86980.33317946777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900168.021978022,
            "unit": "ns",
            "range": "± 102501.24631935816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404182.4086021506,
            "unit": "ns",
            "range": "± 96621.16587052269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5931177.79245283,
            "unit": "ns",
            "range": "± 246820.3422559817"
          }
        ]
      }
    ]
  }
}