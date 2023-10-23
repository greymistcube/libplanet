window.BENCHMARK_DATA = {
  "lastUpdate": 1698026594398,
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
          "id": "cc8d01b4188659f912a2250585938d8eb7656120",
          "message": "Refactored Libplanet.Consensus",
          "timestamp": "2023-10-23T10:42:20+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/cc8d01b4188659f912a2250585938d8eb7656120"
        },
        "date": 1698026569499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305412.121212121,
            "unit": "ns",
            "range": "± 95578.80205671863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2509610.909090909,
            "unit": "ns",
            "range": "± 105288.02062055914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1938201.3698630137,
            "unit": "ns",
            "range": "± 92569.55416987014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8903784.090909092,
            "unit": "ns",
            "range": "± 523335.7345035398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52481.05263157895,
            "unit": "ns",
            "range": "± 3794.405028258982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7439591.176470588,
            "unit": "ns",
            "range": "± 150784.26251943343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20837335.714285713,
            "unit": "ns",
            "range": "± 218073.13031374398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51537170.5882353,
            "unit": "ns",
            "range": "± 1014507.9692668177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104852973.33333333,
            "unit": "ns",
            "range": "± 1141392.2053268773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207333603.33333334,
            "unit": "ns",
            "range": "± 2105482.3590083197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4735776.953125,
            "unit": "ns",
            "range": "± 10915.773285564217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1427038.3072916667,
            "unit": "ns",
            "range": "± 5174.180547555198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079430.4296875,
            "unit": "ns",
            "range": "± 3623.8200045396416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625855.1897321427,
            "unit": "ns",
            "range": "± 8171.854323146038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846531.7661830357,
            "unit": "ns",
            "range": "± 2483.3166687043763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773402.3228236607,
            "unit": "ns",
            "range": "± 2077.8917458355627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297229.6296296297,
            "unit": "ns",
            "range": "± 136695.20236937224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3356202.380952381,
            "unit": "ns",
            "range": "± 122392.0798650999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4058319.0476190476,
            "unit": "ns",
            "range": "± 93683.00069408334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4013933.3333333335,
            "unit": "ns",
            "range": "± 158079.36511056358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10011502.631578946,
            "unit": "ns",
            "range": "± 340548.68563861016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253520.37037037036,
            "unit": "ns",
            "range": "± 8966.12870815387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243357.8947368421,
            "unit": "ns",
            "range": "± 6186.892490687301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223573.86363636365,
            "unit": "ns",
            "range": "± 12314.046687432678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110460,
            "unit": "ns",
            "range": "± 63737.66323207742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3765853.3333333335,
            "unit": "ns",
            "range": "± 62466.67530619446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20990.425531914894,
            "unit": "ns",
            "range": "± 1661.4586899065062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92298.9898989899,
            "unit": "ns",
            "range": "± 6317.573399903023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74042.26804123711,
            "unit": "ns",
            "range": "± 5630.216748557628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83349.47368421052,
            "unit": "ns",
            "range": "± 9086.357246879365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5378.125,
            "unit": "ns",
            "range": "± 814.759005376501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19460.21505376344,
            "unit": "ns",
            "range": "± 1541.889001316118"
          }
        ]
      }
    ]
  }
}