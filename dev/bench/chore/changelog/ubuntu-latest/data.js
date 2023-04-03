window.BENCHMARK_DATA = {
  "lastUpdate": 1680492179163,
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
          "id": "67584a37ecc8290d90c7187c20873cebde4bfb9f",
          "message": "Cleanup",
          "timestamp": "2023-04-03T12:00:11+09:00",
          "tree_id": "fc3ffe1d75b58e05732d3132cfee91799ea557cd",
          "url": "https://github.com/greymistcube/libplanet/commit/67584a37ecc8290d90c7187c20873cebde4bfb9f"
        },
        "date": 1680491668527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3693437.066666667,
            "unit": "ns",
            "range": "± 41909.2755527029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3951439.7333333334,
            "unit": "ns",
            "range": "± 70240.00258243839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4513605.764705882,
            "unit": "ns",
            "range": "± 92668.31583632658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4953010.08,
            "unit": "ns",
            "range": "± 127716.90014276364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8288990.25,
            "unit": "ns",
            "range": "± 181627.39192669178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8137937.173913044,
            "unit": "ns",
            "range": "± 198141.92923178995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21879352.07142857,
            "unit": "ns",
            "range": "± 207268.2498148286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55789401,
            "unit": "ns",
            "range": "± 328122.4559189537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112128509.4,
            "unit": "ns",
            "range": "± 302997.38020951365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225350135.4,
            "unit": "ns",
            "range": "± 699786.402632342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533687.4897959183,
            "unit": "ns",
            "range": "± 109808.50052191327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2754361.6296296297,
            "unit": "ns",
            "range": "± 74610.03228796646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2375763.4523809524,
            "unit": "ns",
            "range": "± 127093.97158202148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5837020.222222222,
            "unit": "ns",
            "range": "± 163220.27105850013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55768.231578947365,
            "unit": "ns",
            "range": "± 4027.7371991976675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5970733.641183035,
            "unit": "ns",
            "range": "± 27893.364056925977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926751.9903738839,
            "unit": "ns",
            "range": "± 1358.7926512507374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377039.071875,
            "unit": "ns",
            "range": "± 3531.0102036121243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667421.1618303573,
            "unit": "ns",
            "range": "± 3725.41348999639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834747.3429129465,
            "unit": "ns",
            "range": "± 347.5617492573657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776664.9147135416,
            "unit": "ns",
            "range": "± 207.06857304353036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372888.4583333333,
            "unit": "ns",
            "range": "± 13667.74827282427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296471.26829268294,
            "unit": "ns",
            "range": "± 10660.119030818534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260172.40350877194,
            "unit": "ns",
            "range": "± 11288.512397027547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5975917.733333333,
            "unit": "ns",
            "range": "± 62072.73900429429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166406.8,
            "unit": "ns",
            "range": "± 63156.27082336548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24725.35106382979,
            "unit": "ns",
            "range": "± 1846.414926209718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110291.41666666667,
            "unit": "ns",
            "range": "± 8890.774652966105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97377.88775510204,
            "unit": "ns",
            "range": "± 7779.30179980349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 224007.7857142857,
            "unit": "ns",
            "range": "± 19505.38536909505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8499.25,
            "unit": "ns",
            "range": "± 933.5905447588669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24444.478723404256,
            "unit": "ns",
            "range": "± 1817.7683809108387"
          }
        ]
      },
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
          "id": "1880a6b456dccb7353378854b7f2d0ae71c8ffe1",
          "message": "Cleanup",
          "timestamp": "2023-04-03T12:01:27+09:00",
          "tree_id": "455a1fabf98b0d26316085398906cca91f305c12",
          "url": "https://github.com/greymistcube/libplanet/commit/1880a6b456dccb7353378854b7f2d0ae71c8ffe1"
        },
        "date": 1680492170782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3895372.350515464,
            "unit": "ns",
            "range": "± 428385.51743885444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4397233.44680851,
            "unit": "ns",
            "range": "± 344219.3594451203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5297167.357142857,
            "unit": "ns",
            "range": "± 521732.1356524031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5878184.571428572,
            "unit": "ns",
            "range": "± 689343.5695354952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10249272.546391753,
            "unit": "ns",
            "range": "± 1050359.1412125726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9245465.054945055,
            "unit": "ns",
            "range": "± 598817.7347883144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26092056.649484538,
            "unit": "ns",
            "range": "± 2188324.6820315346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65644088.44,
            "unit": "ns",
            "range": "± 6058406.743942829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129662093.56701031,
            "unit": "ns",
            "range": "± 8620117.817621691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263353305.27,
            "unit": "ns",
            "range": "± 17826234.460547768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770181.8282828282,
            "unit": "ns",
            "range": "± 224090.67644872185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3513347.6842105263,
            "unit": "ns",
            "range": "± 309876.1028832867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2852507.5408163266,
            "unit": "ns",
            "range": "± 400275.2843108442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7830155.585858586,
            "unit": "ns",
            "range": "± 680448.4718314948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68289.32291666667,
            "unit": "ns",
            "range": "± 18921.623428456434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7226870.655960648,
            "unit": "ns",
            "range": "± 197250.21079012266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2344221.262871414,
            "unit": "ns",
            "range": "± 104647.75489336041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1696070.775607639,
            "unit": "ns",
            "range": "± 56142.54974110459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3231959.383246528,
            "unit": "ns",
            "range": "± 106262.59582945194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058243.2033203125,
            "unit": "ns",
            "range": "± 18788.37253818818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958434.9224917763,
            "unit": "ns",
            "range": "± 20868.344198856565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441929.9896907217,
            "unit": "ns",
            "range": "± 72045.34558678058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369555.13265306124,
            "unit": "ns",
            "range": "± 62741.582423648346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326228.1836734694,
            "unit": "ns",
            "range": "± 54477.64634949228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6906675.5360824745,
            "unit": "ns",
            "range": "± 767897.9396061944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5131139.25,
            "unit": "ns",
            "range": "± 445074.19088365126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33115.18,
            "unit": "ns",
            "range": "± 12180.205076461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129905.15053763441,
            "unit": "ns",
            "range": "± 25135.889510361314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102862.21978021978,
            "unit": "ns",
            "range": "± 21576.85920239665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 267366.9387755102,
            "unit": "ns",
            "range": "± 40348.08399615974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6421.5,
            "unit": "ns",
            "range": "± 1181.7965545666234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29575.385416666668,
            "unit": "ns",
            "range": "± 10903.262711461806"
          }
        ]
      }
    ]
  }
}