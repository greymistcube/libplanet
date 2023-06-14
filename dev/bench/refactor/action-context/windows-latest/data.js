window.BENCHMARK_DATA = {
  "lastUpdate": 1686712914219,
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
          "id": "491a8b1b2360f52794079532c4417611f278c754",
          "message": "Changelog",
          "timestamp": "2023-06-13T00:56:09+09:00",
          "tree_id": "c7d11a1c3f55368b271cae22081535314ea65a25",
          "url": "https://github.com/greymistcube/libplanet/commit/491a8b1b2360f52794079532c4417611f278c754"
        },
        "date": 1686586390822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1304814.4329896907,
            "unit": "ns",
            "range": "± 108399.0736331215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2380103.50877193,
            "unit": "ns",
            "range": "± 100462.9053163979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091657.142857143,
            "unit": "ns",
            "range": "± 116529.83990078072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5238809,
            "unit": "ns",
            "range": "± 350870.70400402887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46322.602739726026,
            "unit": "ns",
            "range": "± 2304.479953022217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6943990,
            "unit": "ns",
            "range": "± 158981.19849115558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17949785.714285713,
            "unit": "ns",
            "range": "± 212629.38724146603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47602969.3877551,
            "unit": "ns",
            "range": "± 1891557.1718168345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93602246.15384616,
            "unit": "ns",
            "range": "± 3850639.4235733207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185666845.83333334,
            "unit": "ns",
            "range": "± 7297501.023593212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4677211.666666667,
            "unit": "ns",
            "range": "± 54818.58824707707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1477835.5859375,
            "unit": "ns",
            "range": "± 14095.605741786925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167900.4947916667,
            "unit": "ns",
            "range": "± 11918.215647122244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628720.4947916665,
            "unit": "ns",
            "range": "± 9460.597570039794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833023.73046875,
            "unit": "ns",
            "range": "± 3130.2669088280722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757539.2252604166,
            "unit": "ns",
            "range": "± 5819.97548543717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3030189.6551724137,
            "unit": "ns",
            "range": "± 86226.3853586575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3141946.296296296,
            "unit": "ns",
            "range": "± 125169.12892195249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3846837.5,
            "unit": "ns",
            "range": "± 135606.10130646208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3905974.418604651,
            "unit": "ns",
            "range": "± 143819.69547388685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6476640.845070423,
            "unit": "ns",
            "range": "± 316172.7871083264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243676,
            "unit": "ns",
            "range": "± 8805.090364472735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242265.625,
            "unit": "ns",
            "range": "± 15468.186898310112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218942.68292682926,
            "unit": "ns",
            "range": "± 11608.681622360677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3712383.3333333335,
            "unit": "ns",
            "range": "± 34191.83404193924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3498691.4285714286,
            "unit": "ns",
            "range": "± 113329.995436099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19135.78947368421,
            "unit": "ns",
            "range": "± 1959.1528667276493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82754.54545454546,
            "unit": "ns",
            "range": "± 7469.520006534212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65520.58823529412,
            "unit": "ns",
            "range": "± 2118.000688437337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84292.39130434782,
            "unit": "ns",
            "range": "± 13208.906699528414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4914.736842105263,
            "unit": "ns",
            "range": "± 723.609219366105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16444.897959183672,
            "unit": "ns",
            "range": "± 1990.0848269222868"
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
          "id": "5933669b840dd26e15ad7aaf3d629a322056ea7a",
          "message": "Changelog",
          "timestamp": "2023-06-14T12:03:45+09:00",
          "tree_id": "6a4d569228751c536a089727c09800efa4427895",
          "url": "https://github.com/greymistcube/libplanet/commit/5933669b840dd26e15ad7aaf3d629a322056ea7a"
        },
        "date": 1686712892261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398668.5714285714,
            "unit": "ns",
            "range": "± 67557.09886181657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2702082.456140351,
            "unit": "ns",
            "range": "± 116132.02019808414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2280474,
            "unit": "ns",
            "range": "± 143874.05520668472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5411700,
            "unit": "ns",
            "range": "± 163309.59815174626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46391.57894736842,
            "unit": "ns",
            "range": "± 2790.3962640081013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7338368.75,
            "unit": "ns",
            "range": "± 137711.1117218457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20710478.57142857,
            "unit": "ns",
            "range": "± 311423.04439847986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52188150,
            "unit": "ns",
            "range": "± 569826.0351937382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103719233.33333333,
            "unit": "ns",
            "range": "± 1492850.291827524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206460753.84615386,
            "unit": "ns",
            "range": "± 2197428.9422016907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4912683.489583333,
            "unit": "ns",
            "range": "± 54314.58379627616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578453.2682291667,
            "unit": "ns",
            "range": "± 13718.386244408955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1205459.47265625,
            "unit": "ns",
            "range": "± 7179.4959702796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678701.2760416665,
            "unit": "ns",
            "range": "± 23443.929642844032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855307.8951322115,
            "unit": "ns",
            "range": "± 4998.981112116122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791406.81640625,
            "unit": "ns",
            "range": "± 5396.313699461008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258750,
            "unit": "ns",
            "range": "± 117387.32688069492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3486040.909090909,
            "unit": "ns",
            "range": "± 76860.87405851537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4226753.571428572,
            "unit": "ns",
            "range": "± 121019.60502987647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4368764.102564103,
            "unit": "ns",
            "range": "± 150590.9036310303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6896116.129032258,
            "unit": "ns",
            "range": "± 209485.4029867383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268663.3333333333,
            "unit": "ns",
            "range": "± 8012.338904005726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253238.63636363635,
            "unit": "ns",
            "range": "± 8000.529514716901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236671.42857142858,
            "unit": "ns",
            "range": "± 13193.072978012917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4118746.6666666665,
            "unit": "ns",
            "range": "± 76438.39598626061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825215.3846153845,
            "unit": "ns",
            "range": "± 52694.55769105962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19593.617021276597,
            "unit": "ns",
            "range": "± 1832.60837146075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91098.96907216495,
            "unit": "ns",
            "range": "± 6886.58863972457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74444.26229508196,
            "unit": "ns",
            "range": "± 3348.707441693681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93719.04761904762,
            "unit": "ns",
            "range": "± 8760.005999206785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5782.291666666667,
            "unit": "ns",
            "range": "± 922.1250961677902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19167.021276595744,
            "unit": "ns",
            "range": "± 1599.4883790797785"
          }
        ]
      }
    ]
  }
}