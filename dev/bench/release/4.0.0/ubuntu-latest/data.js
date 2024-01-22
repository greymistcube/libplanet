window.BENCHMARK_DATA = {
  "lastUpdate": 1705911922475,
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
          "id": "0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d",
          "message": "Release 4.0.0",
          "timestamp": "2024-01-22T17:14:19+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/greymistcube/libplanet/commit/0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d"
        },
        "date": 1705911916169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730830.994591346,
            "unit": "ns",
            "range": "± 8272.09435852177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209400.7467912945,
            "unit": "ns",
            "range": "± 17086.15407092143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777075.6608723958,
            "unit": "ns",
            "range": "± 2895.5337452819685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946448.7670200893,
            "unit": "ns",
            "range": "± 2077.3994268716897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626885.7669020433,
            "unit": "ns",
            "range": "± 5900.496669742317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575646.1201171875,
            "unit": "ns",
            "range": "± 12319.715288694828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2374081.269230769,
            "unit": "ns",
            "range": "± 63148.813331404854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2467355.0204081633,
            "unit": "ns",
            "range": "± 98391.0999094705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3071902.1,
            "unit": "ns",
            "range": "± 54143.61216748341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3092908.881355932,
            "unit": "ns",
            "range": "± 120970.32512207635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13796034.210526315,
            "unit": "ns",
            "range": "± 1049885.8279561994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40082.03125,
            "unit": "ns",
            "range": "± 5747.120779281112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196601.42857142858,
            "unit": "ns",
            "range": "± 3815.9798470743144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191711.68333333332,
            "unit": "ns",
            "range": "± 8538.616292243034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162473.4,
            "unit": "ns",
            "range": "± 2975.897434868538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200070.8666666667,
            "unit": "ns",
            "range": "± 58889.80191348519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2906429.25,
            "unit": "ns",
            "range": "± 56549.71505439557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14652.104166666666,
            "unit": "ns",
            "range": "± 1994.8561297769754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67042,
            "unit": "ns",
            "range": "± 6227.205970059798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52643.5,
            "unit": "ns",
            "range": "± 1618.742767906207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58949.74736842105,
            "unit": "ns",
            "range": "± 11225.254680301288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4028.7258064516127,
            "unit": "ns",
            "range": "± 903.6100800224025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14200.157894736842,
            "unit": "ns",
            "range": "± 2593.6281058393424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5515946.333333333,
            "unit": "ns",
            "range": "± 27652.34522905185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14114398.384615384,
            "unit": "ns",
            "range": "± 69374.7361274723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35982905.5,
            "unit": "ns",
            "range": "± 135777.1988946107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73619185.21428572,
            "unit": "ns",
            "range": "± 373304.6927336309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148032638.8846154,
            "unit": "ns",
            "range": "± 1192585.5473374883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982859.2708333334,
            "unit": "ns",
            "range": "± 88406.32145788756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862412.103448276,
            "unit": "ns",
            "range": "± 54558.30049808111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591919.7282608696,
            "unit": "ns",
            "range": "± 125701.29981896802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13039569.148936171,
            "unit": "ns",
            "range": "± 1021459.1278379901"
          }
        ]
      }
    ]
  }
}