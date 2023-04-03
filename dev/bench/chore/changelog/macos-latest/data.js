window.BENCHMARK_DATA = {
  "lastUpdate": 1680492293771,
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
        "date": 1680491800768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8049997.326086956,
            "unit": "ns",
            "range": "± 307540.8291976353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20602748.5,
            "unit": "ns",
            "range": "± 531063.6641672847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51166834.733333334,
            "unit": "ns",
            "range": "± 1399878.1805082967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99390239.375,
            "unit": "ns",
            "range": "± 2527288.721461931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216344543.79411766,
            "unit": "ns",
            "range": "± 4267430.22337511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74506.93684210526,
            "unit": "ns",
            "range": "± 12572.236868973861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402235.8,
            "unit": "ns",
            "range": "± 15911.896671474255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334754.85507246375,
            "unit": "ns",
            "range": "± 16149.939396421862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336030.6,
            "unit": "ns",
            "range": "± 14994.70261283823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5590605.7105263155,
            "unit": "ns",
            "range": "± 121040.66776986749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132114.4,
            "unit": "ns",
            "range": "± 74329.86085666668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25556.10824742268,
            "unit": "ns",
            "range": "± 4052.3078109802154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105357.24489795919,
            "unit": "ns",
            "range": "± 13766.781478228804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103335.29591836735,
            "unit": "ns",
            "range": "± 16722.735005405488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264259.1304347826,
            "unit": "ns",
            "range": "± 22661.489262825897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7890.989130434783,
            "unit": "ns",
            "range": "± 1072.8337181006855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17807.41176470588,
            "unit": "ns",
            "range": "± 1295.7177758377202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597458.0707070706,
            "unit": "ns",
            "range": "± 143499.77589097572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993653.214285714,
            "unit": "ns",
            "range": "± 130267.47908369254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2622734.3571428573,
            "unit": "ns",
            "range": "± 255550.55056380507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7322992.410526316,
            "unit": "ns",
            "range": "± 433702.04505119054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378521.1842105263,
            "unit": "ns",
            "range": "± 77601.20988603181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657741.7989690723,
            "unit": "ns",
            "range": "± 275266.0637278264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4596175.293103448,
            "unit": "ns",
            "range": "± 133768.17732271523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4858407.947916667,
            "unit": "ns",
            "range": "± 470639.1569902823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9276859.825,
            "unit": "ns",
            "range": "± 481745.0257675912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6650133.409765625,
            "unit": "ns",
            "range": "± 149898.93652349524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837461.8721354166,
            "unit": "ns",
            "range": "± 30473.804680790534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291525.0721153845,
            "unit": "ns",
            "range": "± 12031.751496923313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2474246.922679228,
            "unit": "ns",
            "range": "± 42630.772221927386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831929.0412760417,
            "unit": "ns",
            "range": "± 7904.491860505725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730201.0861328125,
            "unit": "ns",
            "range": "± 2732.2427503159765"
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
        "date": 1680492273100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8473557.75,
            "unit": "ns",
            "range": "± 193943.18760613623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22201397.054054055,
            "unit": "ns",
            "range": "± 1113169.4537530423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59136598.18518519,
            "unit": "ns",
            "range": "± 2481213.5795690864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115581581.3888889,
            "unit": "ns",
            "range": "± 4389284.747258975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236921559.9019608,
            "unit": "ns",
            "range": "± 9544618.329548627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77074.36046511628,
            "unit": "ns",
            "range": "± 4213.646784836121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 520554.1182795699,
            "unit": "ns",
            "range": "± 109159.3787127485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 390165.4885057471,
            "unit": "ns",
            "range": "± 51063.54190146941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 384180.511627907,
            "unit": "ns",
            "range": "± 48847.6269023786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6124865.14893617,
            "unit": "ns",
            "range": "± 393365.58628958033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4588236.840425532,
            "unit": "ns",
            "range": "± 285194.8587627038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28923.66853932584,
            "unit": "ns",
            "range": "± 2730.1595617537346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138164.59677419355,
            "unit": "ns",
            "range": "± 18720.955318122567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138348.35555555555,
            "unit": "ns",
            "range": "± 17139.04795732236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 313080.8333333333,
            "unit": "ns",
            "range": "± 46355.09584152742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12395.366666666667,
            "unit": "ns",
            "range": "± 1377.5057103411484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30777.317204301075,
            "unit": "ns",
            "range": "± 5191.068428908816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1771811.7840909092,
            "unit": "ns",
            "range": "± 225517.62666024597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3068802.3225806453,
            "unit": "ns",
            "range": "± 137530.3397029327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2516451.532608696,
            "unit": "ns",
            "range": "± 177849.0224008976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7431886.068421053,
            "unit": "ns",
            "range": "± 674789.5667736792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3723983.9595959596,
            "unit": "ns",
            "range": "± 441472.3673567924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3962169.4393939395,
            "unit": "ns",
            "range": "± 402663.7983203503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4887015.631313131,
            "unit": "ns",
            "range": "± 533567.6699326717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4941997.414893617,
            "unit": "ns",
            "range": "± 450113.8087244173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10085728.734042553,
            "unit": "ns",
            "range": "± 929661.2547739729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8231430.6328125,
            "unit": "ns",
            "range": "± 185529.49705212837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268082.978984375,
            "unit": "ns",
            "range": "± 91324.089082934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1484705.5374581474,
            "unit": "ns",
            "range": "± 41970.167622936904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3218118.9623579546,
            "unit": "ns",
            "range": "± 97305.12239589314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975943.3844302399,
            "unit": "ns",
            "range": "± 64410.45240292326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890675.4558321796,
            "unit": "ns",
            "range": "± 44383.64334287991"
          }
        ]
      }
    ]
  }
}