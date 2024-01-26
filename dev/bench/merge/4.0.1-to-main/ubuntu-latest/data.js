window.BENCHMARK_DATA = {
  "lastUpdate": 1706256015798,
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
          "id": "22b0d9d825ae52af2883ef4870982de55426d6cc",
          "message": "Merge tag '4.0.1' into merge/4.0.1-to-main\n\nLibplanet 4.0.1",
          "timestamp": "2024-01-26T16:48:50+09:00",
          "tree_id": "4a2295b52476b530269c259f0087e0b69e593507",
          "url": "https://github.com/greymistcube/libplanet/commit/22b0d9d825ae52af2883ef4870982de55426d6cc"
        },
        "date": 1706256009374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2526056.375,
            "unit": "ns",
            "range": "± 48153.64171742362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2605271.897260274,
            "unit": "ns",
            "range": "± 129614.29618623819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3160211.2926829266,
            "unit": "ns",
            "range": "± 97437.95448495516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3403239.7441860465,
            "unit": "ns",
            "range": "± 123585.93186891943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14093376.655555556,
            "unit": "ns",
            "range": "± 852968.515701003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41623.61855670103,
            "unit": "ns",
            "range": "± 6087.67633804027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058435.8315789474,
            "unit": "ns",
            "range": "± 95937.76149135089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1972817.66,
            "unit": "ns",
            "range": "± 78284.849592881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687590.9175257732,
            "unit": "ns",
            "range": "± 120911.96073793992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12981087.064516129,
            "unit": "ns",
            "range": "± 829327.5164050849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5813150.4,
            "unit": "ns",
            "range": "± 25449.864357763705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14658610.066666666,
            "unit": "ns",
            "range": "± 103272.11289976085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37549423.666666664,
            "unit": "ns",
            "range": "± 115982.53991852558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75535600.33333333,
            "unit": "ns",
            "range": "± 250096.62120971398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149974553,
            "unit": "ns",
            "range": "± 800172.5909413833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748054.7359375,
            "unit": "ns",
            "range": "± 56251.33708526313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212025.6176757812,
            "unit": "ns",
            "range": "± 6123.323468343429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764706.724233774,
            "unit": "ns",
            "range": "± 1433.7080198384906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987777.432391827,
            "unit": "ns",
            "range": "± 11495.709895575868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627008.6251860119,
            "unit": "ns",
            "range": "± 14776.274656494914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587685.5124674479,
            "unit": "ns",
            "range": "± 1661.6416456967281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215118.46153846153,
            "unit": "ns",
            "range": "± 10442.884930914432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207999.57228915664,
            "unit": "ns",
            "range": "± 10942.191233693118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170676.67142857143,
            "unit": "ns",
            "range": "± 5486.510862135984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3265691.8571428573,
            "unit": "ns",
            "range": "± 26613.568219286895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834449.8,
            "unit": "ns",
            "range": "± 39999.64610772022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15064.581395348838,
            "unit": "ns",
            "range": "± 1724.4416144167212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72311.7967032967,
            "unit": "ns",
            "range": "± 7666.751175613226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92917.61111111111,
            "unit": "ns",
            "range": "± 1972.6539942538711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96489.80612244898,
            "unit": "ns",
            "range": "± 14811.082986227259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5871.1122448979595,
            "unit": "ns",
            "range": "± 1307.9080872105594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14739.020202020201,
            "unit": "ns",
            "range": "± 2271.4827665583084"
          }
        ]
      }
    ]
  }
}