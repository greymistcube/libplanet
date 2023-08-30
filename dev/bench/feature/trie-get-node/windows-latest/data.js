window.BENCHMARK_DATA = {
  "lastUpdate": 1693389881528,
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
          "id": "bcf41b70659cb9ed7cc4b1f9356a9c3cbced9ac8",
          "message": "Added GetNode()",
          "timestamp": "2023-08-30T18:21:44+09:00",
          "tree_id": "b0bb9a04e0e0c54709954050c192fd94bc462e12",
          "url": "https://github.com/greymistcube/libplanet/commit/bcf41b70659cb9ed7cc4b1f9356a9c3cbced9ac8"
        },
        "date": 1693388311049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376647,
            "unit": "ns",
            "range": "± 110459.63516601936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2525888.5714285714,
            "unit": "ns",
            "range": "± 115695.06840398199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1766179.797979798,
            "unit": "ns",
            "range": "± 119966.32178750867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4590782.978723404,
            "unit": "ns",
            "range": "± 175571.5366640803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54488.17204301075,
            "unit": "ns",
            "range": "± 4307.749575458407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7736535.714285715,
            "unit": "ns",
            "range": "± 217978.75060263491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21339060,
            "unit": "ns",
            "range": "± 255143.01535749374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53948364.28571428,
            "unit": "ns",
            "range": "± 640792.7105212284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104519656.66666667,
            "unit": "ns",
            "range": "± 1313013.672253191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213594073.33333334,
            "unit": "ns",
            "range": "± 1945102.24610675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4652068.541666667,
            "unit": "ns",
            "range": "± 30163.440491842437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1429125.15625,
            "unit": "ns",
            "range": "± 4710.790994375545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088329.140625,
            "unit": "ns",
            "range": "± 2765.092527299352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689440.8333333335,
            "unit": "ns",
            "range": "± 8529.652227687966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836690.8268229166,
            "unit": "ns",
            "range": "± 2399.381955207129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771909.3489583334,
            "unit": "ns",
            "range": "± 1603.6095641227098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298959.090909091,
            "unit": "ns",
            "range": "± 79877.23115054161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3565275,
            "unit": "ns",
            "range": "± 101396.13779261644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4359991.176470588,
            "unit": "ns",
            "range": "± 86755.98004477507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4059131.25,
            "unit": "ns",
            "range": "± 78993.85392758941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6128605.882352941,
            "unit": "ns",
            "range": "± 122780.09544806232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278703.8961038961,
            "unit": "ns",
            "range": "± 14230.59566714251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254812.24489795917,
            "unit": "ns",
            "range": "± 10127.265850437727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241661.11111111112,
            "unit": "ns",
            "range": "± 17491.76417800552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191393.3333333335,
            "unit": "ns",
            "range": "± 77786.20394266276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911666.6666666665,
            "unit": "ns",
            "range": "± 63541.883450059555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23003.260869565216,
            "unit": "ns",
            "range": "± 1698.121204009575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94580.61224489796,
            "unit": "ns",
            "range": "± 7501.184211159291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77091.57894736843,
            "unit": "ns",
            "range": "± 7616.774086212819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91251.02040816327,
            "unit": "ns",
            "range": "± 18672.424372258774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6541.666666666667,
            "unit": "ns",
            "range": "± 1002.9080523176136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22176.344086021505,
            "unit": "ns",
            "range": "± 2874.4147929721344"
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
          "id": "41b89963cd043efea056756c69554e0e62b52536",
          "message": "Added GetNode() tests",
          "timestamp": "2023-08-30T18:41:51+09:00",
          "tree_id": "8329dc5d8e0f474765cbe0ed1952be30facfc0ee",
          "url": "https://github.com/greymistcube/libplanet/commit/41b89963cd043efea056756c69554e0e62b52536"
        },
        "date": 1693389526265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556344.3298969073,
            "unit": "ns",
            "range": "± 122994.46800658706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2980666.6666666665,
            "unit": "ns",
            "range": "± 125722.16447989365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068223.7113402062,
            "unit": "ns",
            "range": "± 153966.81648247826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5133085.185185186,
            "unit": "ns",
            "range": "± 141965.62071285944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58431.52173913043,
            "unit": "ns",
            "range": "± 3542.1459115715265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9008550,
            "unit": "ns",
            "range": "± 119608.56510364902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24973870,
            "unit": "ns",
            "range": "± 226163.42447758562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61968460,
            "unit": "ns",
            "range": "± 656541.036471772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124470871.42857143,
            "unit": "ns",
            "range": "± 1057157.4851230294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250339288.46153846,
            "unit": "ns",
            "range": "± 3085360.344308387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5562460.845588235,
            "unit": "ns",
            "range": "± 114051.77618276133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1740942.421875,
            "unit": "ns",
            "range": "± 12556.114621531538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270180.2734375,
            "unit": "ns",
            "range": "± 5160.759272389999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3148713.0859375,
            "unit": "ns",
            "range": "± 14332.434689506923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021031.3616071428,
            "unit": "ns",
            "range": "± 7434.569050352105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914396.2541852678,
            "unit": "ns",
            "range": "± 3952.126045903507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3930600,
            "unit": "ns",
            "range": "± 55390.612923129855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4162133.3333333335,
            "unit": "ns",
            "range": "± 85097.55647283334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947940,
            "unit": "ns",
            "range": "± 84963.81414629238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4570778.571428572,
            "unit": "ns",
            "range": "± 48883.67949407165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153563.636363637,
            "unit": "ns",
            "range": "± 174483.64514831305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307917.3076923077,
            "unit": "ns",
            "range": "± 12582.492055822711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295417.7419354839,
            "unit": "ns",
            "range": "± 7387.394087081687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272617.7215189873,
            "unit": "ns",
            "range": "± 13771.847533484992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4963220,
            "unit": "ns",
            "range": "± 50668.406611728264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490307.692307692,
            "unit": "ns",
            "range": "± 36336.516562508245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25872.63157894737,
            "unit": "ns",
            "range": "± 2039.6308648747224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100877.65957446808,
            "unit": "ns",
            "range": "± 5910.718426128236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86865.38461538461,
            "unit": "ns",
            "range": "± 4493.13551245305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96012.64367816092,
            "unit": "ns",
            "range": "± 9672.555332001371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6975.757575757576,
            "unit": "ns",
            "range": "± 1196.6868300446135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24127.083333333332,
            "unit": "ns",
            "range": "± 1855.2616025873783"
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
          "id": "28f8978d624a7094733745d9e4e5056c4d918075",
          "message": "Changelog",
          "timestamp": "2023-08-30T18:47:55+09:00",
          "tree_id": "de827fa041fc2b6807286f32b67cc6adfb761921",
          "url": "https://github.com/greymistcube/libplanet/commit/28f8978d624a7094733745d9e4e5056c4d918075"
        },
        "date": 1693389857945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1262163.6363636365,
            "unit": "ns",
            "range": "± 86789.13744518183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483968.085106383,
            "unit": "ns",
            "range": "± 140766.04109417164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717996,
            "unit": "ns",
            "range": "± 109089.34890466825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4545667.307692308,
            "unit": "ns",
            "range": "± 187251.98679136956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47881.05263157895,
            "unit": "ns",
            "range": "± 2869.8837820950803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7225921.428571428,
            "unit": "ns",
            "range": "± 56238.915879848355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20516653.333333332,
            "unit": "ns",
            "range": "± 163091.9936138877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49135706.666666664,
            "unit": "ns",
            "range": "± 764306.5507529093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96779964.28571428,
            "unit": "ns",
            "range": "± 1249959.5677197187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195622060,
            "unit": "ns",
            "range": "± 4122160.300184971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4426648.489583333,
            "unit": "ns",
            "range": "± 16032.626873510646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1394638.4114583333,
            "unit": "ns",
            "range": "± 5854.251132828287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073245.2083333333,
            "unit": "ns",
            "range": "± 7200.430378413437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664103.3854166665,
            "unit": "ns",
            "range": "± 12323.771724922319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823723.30078125,
            "unit": "ns",
            "range": "± 3494.130645067547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763885.56640625,
            "unit": "ns",
            "range": "± 3977.716690289391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138315.3846153845,
            "unit": "ns",
            "range": "± 29476.87924893696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3268140,
            "unit": "ns",
            "range": "± 73832.08830283683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3953200,
            "unit": "ns",
            "range": "± 108889.94090718035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3985671.4285714286,
            "unit": "ns",
            "range": "± 68638.66849806174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6056420,
            "unit": "ns",
            "range": "± 165294.3318384845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262069.5652173913,
            "unit": "ns",
            "range": "± 9942.789002090742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246344,
            "unit": "ns",
            "range": "± 9901.147325807598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212058.97435897434,
            "unit": "ns",
            "range": "± 7350.07045969514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977177.1428571427,
            "unit": "ns",
            "range": "± 128871.03696357543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582533.3333333335,
            "unit": "ns",
            "range": "± 19372.67679131116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19148.42105263158,
            "unit": "ns",
            "range": "± 1530.3916309993735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85152.52525252526,
            "unit": "ns",
            "range": "± 8516.722367469769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68425,
            "unit": "ns",
            "range": "± 2224.3120515260675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82985.71428571429,
            "unit": "ns",
            "range": "± 14903.545554769604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5577.319587628866,
            "unit": "ns",
            "range": "± 1014.6330570949422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18794.897959183672,
            "unit": "ns",
            "range": "± 2607.6561521866774"
          }
        ]
      }
    ]
  }
}