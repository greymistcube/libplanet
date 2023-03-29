window.BENCHMARK_DATA = {
  "lastUpdate": 1680059949405,
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
          "id": "ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:53:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7"
        },
        "date": 1680059253575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98226.31578947368,
            "unit": "ns",
            "range": "± 2112.092723465194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800716.145833333,
            "unit": "ns",
            "range": "± 20172.945256155577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1484929.071514423,
            "unit": "ns",
            "range": "± 3885.4131781536903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168786.5299479167,
            "unit": "ns",
            "range": "± 10448.573049315699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615859.5145089286,
            "unit": "ns",
            "range": "± 8487.636438590063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849054.1471354166,
            "unit": "ns",
            "range": "± 3320.542992111911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750500.09765625,
            "unit": "ns",
            "range": "± 2211.6154787656837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4527434.739583333,
            "unit": "ns",
            "range": "± 70325.6617333906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5957523.333333333,
            "unit": "ns",
            "range": "± 174893.7385431771"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23765308.695652176,
            "unit": "ns",
            "range": "± 595318.8510927595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6130520,
            "unit": "ns",
            "range": "± 68078.89540819534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27806163.636363637,
            "unit": "ns",
            "range": "± 670636.6254363263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89020.61855670103,
            "unit": "ns",
            "range": "± 9977.484424780396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176528.1690140845,
            "unit": "ns",
            "range": "± 8608.968464814412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158111.23595505618,
            "unit": "ns",
            "range": "± 7961.304686965104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3395900,
            "unit": "ns",
            "range": "± 56842.49493793557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8511706.666666666,
            "unit": "ns",
            "range": "± 129064.1782030866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16663.636363636364,
            "unit": "ns",
            "range": "± 1261.925350560256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44993.406593406595,
            "unit": "ns",
            "range": "± 4145.460762429784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36540,
            "unit": "ns",
            "range": "± 845.6700862256168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91428.86597938144,
            "unit": "ns",
            "range": "± 14321.537967071414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5223.469387755102,
            "unit": "ns",
            "range": "± 869.1506720965051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16564.044943820223,
            "unit": "ns",
            "range": "± 1143.5836010115545"
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
          "id": "7669de38b6d6e1af3fa179eae36a5abf91f81fa4",
          "message": "Introduce state cache",
          "timestamp": "2023-03-29T11:51:25+09:00",
          "tree_id": "f1c8e9d1a35ba2d4258366bbd2a7bc2347b3cd52",
          "url": "https://github.com/greymistcube/libplanet/commit/7669de38b6d6e1af3fa179eae36a5abf91f81fa4"
        },
        "date": 1680059446213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104292,
            "unit": "ns",
            "range": "± 7064.73930263116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893847.395833333,
            "unit": "ns",
            "range": "± 18708.142232830174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548604.213169643,
            "unit": "ns",
            "range": "± 3132.2881309556337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170867.689732143,
            "unit": "ns",
            "range": "± 4963.894314617078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632670.284598214,
            "unit": "ns",
            "range": "± 8374.433863973969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840560.0325520834,
            "unit": "ns",
            "range": "± 5405.550424746404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772018.3743990385,
            "unit": "ns",
            "range": "± 2305.0747689245695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4705805.78125,
            "unit": "ns",
            "range": "± 40317.51414091258"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5586900,
            "unit": "ns",
            "range": "± 49086.20360768782"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25687123.076923076,
            "unit": "ns",
            "range": "± 220787.84746843198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5977843.333333333,
            "unit": "ns",
            "range": "± 175911.80771043774"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28056550,
            "unit": "ns",
            "range": "± 541071.1622944496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99737.8947368421,
            "unit": "ns",
            "range": "± 9400.420757303033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193952.688172043,
            "unit": "ns",
            "range": "± 11372.35962091239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178222,
            "unit": "ns",
            "range": "± 13676.009962150822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3619440,
            "unit": "ns",
            "range": "± 45184.17548529257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8856977.777777778,
            "unit": "ns",
            "range": "± 183409.50503163054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21202.0202020202,
            "unit": "ns",
            "range": "± 2704.190995170871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52468.131868131866,
            "unit": "ns",
            "range": "± 4611.191196327068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43330.61224489796,
            "unit": "ns",
            "range": "± 3544.1663455895155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94382.22222222222,
            "unit": "ns",
            "range": "± 13196.906155796285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5372.916666666667,
            "unit": "ns",
            "range": "± 736.4894206074293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18460.82474226804,
            "unit": "ns",
            "range": "± 2980.4766362750506"
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
          "id": "68acec02406c11cbbb4a120f0d9af2fbf5d3c2cd",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:54:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/68acec02406c11cbbb4a120f0d9af2fbf5d3c2cd"
        },
        "date": 1680059548418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104066.66666666667,
            "unit": "ns",
            "range": "± 6789.832439862084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804355.260416667,
            "unit": "ns",
            "range": "± 16470.616961669293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537387.34375,
            "unit": "ns",
            "range": "± 4095.9703827887756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179341.8526785714,
            "unit": "ns",
            "range": "± 3805.5550835955764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659858.6495535714,
            "unit": "ns",
            "range": "± 10961.069676321305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842341.6782924107,
            "unit": "ns",
            "range": "± 2264.4897703141805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765807.91015625,
            "unit": "ns",
            "range": "± 2127.367684574051"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4712765.104166667,
            "unit": "ns",
            "range": "± 25476.463131744724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5290744.94949495,
            "unit": "ns",
            "range": "± 348369.842872789"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25791600,
            "unit": "ns",
            "range": "± 346807.95632659376"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5817462,
            "unit": "ns",
            "range": "± 231729.27632503075"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28876126.666666668,
            "unit": "ns",
            "range": "± 481008.23050081363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101721.875,
            "unit": "ns",
            "range": "± 12114.108374557589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191112.63157894736,
            "unit": "ns",
            "range": "± 16894.20297217213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175669.69696969696,
            "unit": "ns",
            "range": "± 14048.011367329658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3684021.4285714286,
            "unit": "ns",
            "range": "± 61774.007212038356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9246626.666666666,
            "unit": "ns",
            "range": "± 125116.27430209906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22060.82474226804,
            "unit": "ns",
            "range": "± 2783.0797052991697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58076.92307692308,
            "unit": "ns",
            "range": "± 5580.881589519645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43787.755102040814,
            "unit": "ns",
            "range": "± 4321.589658507629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110184.21052631579,
            "unit": "ns",
            "range": "± 19777.944495468822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6492.929292929293,
            "unit": "ns",
            "range": "± 1117.417989982822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19779.591836734693,
            "unit": "ns",
            "range": "± 2729.2595266196313"
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
          "id": "08d5658e5d4ea609e9fa4d25fe3d5895dfe694d4",
          "message": "Cleanup",
          "timestamp": "2023-03-29T12:03:05+09:00",
          "tree_id": "53ed75b50401b7780b637c6b67055c065b4b7b7e",
          "url": "https://github.com/greymistcube/libplanet/commit/08d5658e5d4ea609e9fa4d25fe3d5895dfe694d4"
        },
        "date": 1680059920013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107043.15789473684,
            "unit": "ns",
            "range": "± 15681.149088320128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773152.704326923,
            "unit": "ns",
            "range": "± 37338.14761766651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577407.5753348214,
            "unit": "ns",
            "range": "± 22779.932458470288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159905.9500558036,
            "unit": "ns",
            "range": "± 28881.27743850943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617530.80078125,
            "unit": "ns",
            "range": "± 58826.91507914794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867167.4339657738,
            "unit": "ns",
            "range": "± 19782.105649563484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802110.2139559659,
            "unit": "ns",
            "range": "± 17136.963175501598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4848054.8828125,
            "unit": "ns",
            "range": "± 150745.2231074804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5423897.872340426,
            "unit": "ns",
            "range": "± 543861.8254269321"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25934713.265306123,
            "unit": "ns",
            "range": "± 2330987.613779922"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6373956.12244898,
            "unit": "ns",
            "range": "± 779213.0240960375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30469707,
            "unit": "ns",
            "range": "± 2476516.5442594783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84478.26086956522,
            "unit": "ns",
            "range": "± 17354.347247037545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184565.65656565657,
            "unit": "ns",
            "range": "± 37668.92066416687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165256.25,
            "unit": "ns",
            "range": "± 26559.21611279813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3545177.777777778,
            "unit": "ns",
            "range": "± 373840.57159506046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8721858.333333334,
            "unit": "ns",
            "range": "± 598382.0827719161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21843,
            "unit": "ns",
            "range": "± 9568.395525337199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51456.12244897959,
            "unit": "ns",
            "range": "± 16070.996263208706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44712.5,
            "unit": "ns",
            "range": "± 12966.907272380964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97672.82608695653,
            "unit": "ns",
            "range": "± 24194.845983085863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4459.574468085107,
            "unit": "ns",
            "range": "± 649.6184403561749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21314,
            "unit": "ns",
            "range": "± 9033.283238148024"
          }
        ]
      }
    ]
  }
}