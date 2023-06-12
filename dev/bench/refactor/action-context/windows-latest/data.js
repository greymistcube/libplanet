window.BENCHMARK_DATA = {
  "lastUpdate": 1686576703146,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686576242371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703393.8775510204,
            "unit": "ns",
            "range": "± 142612.10805605195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128571.875,
            "unit": "ns",
            "range": "± 94578.73059119548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668590.625,
            "unit": "ns",
            "range": "± 189727.06383984725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6655252.631578947,
            "unit": "ns",
            "range": "± 462379.4943278908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56452.12765957447,
            "unit": "ns",
            "range": "± 3535.7765560758417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9078194.444444444,
            "unit": "ns",
            "range": "± 189325.2926523778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24441206.666666668,
            "unit": "ns",
            "range": "± 213052.21179884748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65174310.71428572,
            "unit": "ns",
            "range": "± 1812045.7576062283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125508335.71428572,
            "unit": "ns",
            "range": "± 2042763.6369190346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257588104.76190478,
            "unit": "ns",
            "range": "± 6091159.043357527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6266199.278846154,
            "unit": "ns",
            "range": "± 219482.4855874223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901395.2669270833,
            "unit": "ns",
            "range": "± 34612.37050311288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457650.8231026786,
            "unit": "ns",
            "range": "± 16758.703026818428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318251.729910714,
            "unit": "ns",
            "range": "± 36872.26692950292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032528.6808894231,
            "unit": "ns",
            "range": "± 27579.110556912256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954687.7018229166,
            "unit": "ns",
            "range": "± 14938.729986133483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4042002.7027027025,
            "unit": "ns",
            "range": "± 134818.4550639334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4175042.3076923075,
            "unit": "ns",
            "range": "± 171068.25532191488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179962.5,
            "unit": "ns",
            "range": "± 221832.50402253744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5211503.333333333,
            "unit": "ns",
            "range": "± 95053.89348504704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8278977.5,
            "unit": "ns",
            "range": "± 290040.429089481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321748.93617021275,
            "unit": "ns",
            "range": "± 12465.933968749732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311284.2105263158,
            "unit": "ns",
            "range": "± 13362.658384383863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284034.06593406596,
            "unit": "ns",
            "range": "± 16109.101773567638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5156636.111111111,
            "unit": "ns",
            "range": "± 150074.88635968717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4532841.666666667,
            "unit": "ns",
            "range": "± 48448.03135757161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24855.913978494624,
            "unit": "ns",
            "range": "± 2444.401872495396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104460,
            "unit": "ns",
            "range": "± 7949.9551718259745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99401.03092783505,
            "unit": "ns",
            "range": "± 7378.184268014964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115294.5054945055,
            "unit": "ns",
            "range": "± 13567.34120057232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6871.875,
            "unit": "ns",
            "range": "± 1342.4018635110333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23554.639175257733,
            "unit": "ns",
            "range": "± 2913.72544386037"
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
          "id": "982c6187ade7c9ea1f0e35a05897cc555dce8767",
          "message": "Changelog",
          "timestamp": "2023-06-12T22:08:56+09:00",
          "tree_id": "c34a81b54b5793c4ec53c0313463f15661791867",
          "url": "https://github.com/greymistcube/libplanet/commit/982c6187ade7c9ea1f0e35a05897cc555dce8767"
        },
        "date": 1686576678695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753852.6315789474,
            "unit": "ns",
            "range": "± 172590.22114387155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3277796.875,
            "unit": "ns",
            "range": "± 320781.8883367146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2696826.0416666665,
            "unit": "ns",
            "range": "± 257450.7205762285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7035294.791666667,
            "unit": "ns",
            "range": "± 488926.52496535005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67862.24489795919,
            "unit": "ns",
            "range": "± 16366.753548355353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9575335.632183908,
            "unit": "ns",
            "range": "± 624923.3886026037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24909368.42105263,
            "unit": "ns",
            "range": "± 1624378.1095613018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62520100,
            "unit": "ns",
            "range": "± 2806319.84441908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127122674.50980392,
            "unit": "ns",
            "range": "± 5123684.761296039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283121537.5,
            "unit": "ns",
            "range": "± 5555861.320308491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6150798.102678572,
            "unit": "ns",
            "range": "± 93493.78117982819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992174.0792410714,
            "unit": "ns",
            "range": "± 19895.46784642741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477982.6729910714,
            "unit": "ns",
            "range": "± 26098.61076354673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3175365.066964286,
            "unit": "ns",
            "range": "± 54123.39237423795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045105.4243607954,
            "unit": "ns",
            "range": "± 25091.157815479786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972101.8880208334,
            "unit": "ns",
            "range": "± 15124.382464860593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3840285.4166666665,
            "unit": "ns",
            "range": "± 339520.3728416918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4013631,
            "unit": "ns",
            "range": "± 357312.67994785064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5406176.842105263,
            "unit": "ns",
            "range": "± 358451.1555949686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5229885.56701031,
            "unit": "ns",
            "range": "± 428446.5536946847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8622398.979591837,
            "unit": "ns",
            "range": "± 513144.57946268684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340105.2083333333,
            "unit": "ns",
            "range": "± 43530.03529274609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319106.0606060606,
            "unit": "ns",
            "range": "± 41635.63725253717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282432.97872340423,
            "unit": "ns",
            "range": "± 42150.624399507535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4722051.578947368,
            "unit": "ns",
            "range": "± 321556.80642480374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4309888.541666667,
            "unit": "ns",
            "range": "± 358285.90579086036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23098.96907216495,
            "unit": "ns",
            "range": "± 7236.776659958274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106023.71134020618,
            "unit": "ns",
            "range": "± 20481.03682472661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119712.24489795919,
            "unit": "ns",
            "range": "± 24773.731787138087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137295.7894736842,
            "unit": "ns",
            "range": "± 25786.79736324539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7750,
            "unit": "ns",
            "range": "± 1657.7449380317505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20818.75,
            "unit": "ns",
            "range": "± 3097.2055085230163"
          }
        ]
      }
    ]
  }
}