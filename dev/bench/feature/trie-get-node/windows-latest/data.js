window.BENCHMARK_DATA = {
  "lastUpdate": 1693448161427,
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
          "id": "07beb209fec0f6681d443df8f8fcb572c6139a4f",
          "message": "Changelog",
          "timestamp": "2023-08-30T18:50:02+09:00",
          "tree_id": "ff8b7a19b0e76438c647b54c313565ba1afa0140",
          "url": "https://github.com/greymistcube/libplanet/commit/07beb209fec0f6681d443df8f8fcb572c6139a4f"
        },
        "date": 1693389952427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1231360,
            "unit": "ns",
            "range": "± 132375.80342847152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2227484.4827586208,
            "unit": "ns",
            "range": "± 96255.4000339341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553122.3404255318,
            "unit": "ns",
            "range": "± 85010.03755313891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4212949.230769231,
            "unit": "ns",
            "range": "± 194845.20548620526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46353.16455696202,
            "unit": "ns",
            "range": "± 2407.3517444054137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6971013.333333333,
            "unit": "ns",
            "range": "± 114760.42664529233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18912940,
            "unit": "ns",
            "range": "± 214939.419372064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47112257.14285714,
            "unit": "ns",
            "range": "± 334367.7862526779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96607112.5,
            "unit": "ns",
            "range": "± 1853572.3062508244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187276423.07692307,
            "unit": "ns",
            "range": "± 1553989.8611605365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4084926.729910714,
            "unit": "ns",
            "range": "± 25943.762237437604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1298115.3255208333,
            "unit": "ns",
            "range": "± 6980.037417093558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 950939.0415736607,
            "unit": "ns",
            "range": "± 2945.6418121939896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2406596.9010416665,
            "unit": "ns",
            "range": "± 11274.299262408815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 746158.65234375,
            "unit": "ns",
            "range": "± 4226.198459626403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688120.0716145834,
            "unit": "ns",
            "range": "± 2372.1489389995536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980451.3513513515,
            "unit": "ns",
            "range": "± 99730.19887460151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3062317.777777778,
            "unit": "ns",
            "range": "± 104283.50843404306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3789932.4324324327,
            "unit": "ns",
            "range": "± 126892.37358673087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3469052.9411764704,
            "unit": "ns",
            "range": "± 97596.00474713345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5497946.153846154,
            "unit": "ns",
            "range": "± 125710.85308999929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232085.36585365853,
            "unit": "ns",
            "range": "± 7178.703259489479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226634.2105263158,
            "unit": "ns",
            "range": "± 6674.164643175244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208085.22727272726,
            "unit": "ns",
            "range": "± 11387.546532932693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3748385.714285714,
            "unit": "ns",
            "range": "± 36046.078569239406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3439850,
            "unit": "ns",
            "range": "± 64754.17103682717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21026.08695652174,
            "unit": "ns",
            "range": "± 1611.761003007893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82792.30769230769,
            "unit": "ns",
            "range": "± 5240.021856808334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68243.15789473684,
            "unit": "ns",
            "range": "± 4009.5272876673016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87510.20408163265,
            "unit": "ns",
            "range": "± 14628.178497116049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5890.625,
            "unit": "ns",
            "range": "± 793.9346552721485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20358.42105263158,
            "unit": "ns",
            "range": "± 1812.7012380079282"
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
          "id": "13e2f9cc3a4abdc56b6bfb1b4ee2f7e8e25266d6",
          "message": "Changelog",
          "timestamp": "2023-08-30T18:46:04+09:00",
          "tree_id": "de827fa041fc2b6807286f32b67cc6adfb761921",
          "url": "https://github.com/greymistcube/libplanet/commit/13e2f9cc3a4abdc56b6bfb1b4ee2f7e8e25266d6"
        },
        "date": 1693390056675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559925.7731958763,
            "unit": "ns",
            "range": "± 153736.6012307729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935353.125,
            "unit": "ns",
            "range": "± 280567.5308344724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037100,
            "unit": "ns",
            "range": "± 216981.673414918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5744118.75,
            "unit": "ns",
            "range": "± 428440.44339846546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62941.48936170213,
            "unit": "ns",
            "range": "± 12039.58890426731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7855219.3877551025,
            "unit": "ns",
            "range": "± 639675.6755000345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21712046.39175258,
            "unit": "ns",
            "range": "± 1467582.4658162212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58684775.675675675,
            "unit": "ns",
            "range": "± 2824547.5365533396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121609445,
            "unit": "ns",
            "range": "± 5397985.297843751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235070268.8888889,
            "unit": "ns",
            "range": "± 8856634.938688165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5015717.1875,
            "unit": "ns",
            "range": "± 175983.9353828974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616449.228515625,
            "unit": "ns",
            "range": "± 36604.40583805437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1207391.4417613635,
            "unit": "ns",
            "range": "± 28890.601927172986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944518.284970238,
            "unit": "ns",
            "range": "± 106593.83547061279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009768.701171875,
            "unit": "ns",
            "range": "± 22038.61922900391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915484.3975360577,
            "unit": "ns",
            "range": "± 10740.884624777265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204438.775510204,
            "unit": "ns",
            "range": "± 352605.3164695746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483187,
            "unit": "ns",
            "range": "± 434538.42588045844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584130.927835052,
            "unit": "ns",
            "range": "± 479636.60036376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791116.326530612,
            "unit": "ns",
            "range": "± 501155.82112780464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7084246.9387755105,
            "unit": "ns",
            "range": "± 666017.540317934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290065.9574468085,
            "unit": "ns",
            "range": "± 38655.32152765996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271876.34408602153,
            "unit": "ns",
            "range": "± 36391.90186389854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239379.16666666666,
            "unit": "ns",
            "range": "± 41774.18219720901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4309843.434343434,
            "unit": "ns",
            "range": "± 422312.7702915817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4063909.090909091,
            "unit": "ns",
            "range": "± 444810.5171204946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30842.85714285714,
            "unit": "ns",
            "range": "± 9736.560920402082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97827.95698924731,
            "unit": "ns",
            "range": "± 17672.419961693922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106354.73684210527,
            "unit": "ns",
            "range": "± 22681.40942945581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122082.29166666667,
            "unit": "ns",
            "range": "± 22909.478593582706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8127.380952380952,
            "unit": "ns",
            "range": "± 1259.312414272666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28947.95918367347,
            "unit": "ns",
            "range": "± 10541.153809103766"
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
          "id": "a65ea4d43f3331ffd7ebe0ab5d550007073e0df4",
          "message": "Cleanup",
          "timestamp": "2023-08-30T19:02:00+09:00",
          "tree_id": "8c16f4f60f14fb6408d62e4e1296be5b888d2520",
          "url": "https://github.com/greymistcube/libplanet/commit/a65ea4d43f3331ffd7ebe0ab5d550007073e0df4"
        },
        "date": 1693390843452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504184.7368421052,
            "unit": "ns",
            "range": "± 140322.37258755366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866328.5714285714,
            "unit": "ns",
            "range": "± 214746.34353928376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1950895.1612903227,
            "unit": "ns",
            "range": "± 173523.66241106656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5413588.659793815,
            "unit": "ns",
            "range": "± 413019.61814691906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54204.395604395606,
            "unit": "ns",
            "range": "± 3527.2561601811717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8572247.826086957,
            "unit": "ns",
            "range": "± 328573.2867610312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23872211.76470588,
            "unit": "ns",
            "range": "± 483694.30671958625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61332372.222222224,
            "unit": "ns",
            "range": "± 2549985.399323103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126088532,
            "unit": "ns",
            "range": "± 5028041.530864473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242983821.83908045,
            "unit": "ns",
            "range": "± 13248117.096002782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5353981.302083333,
            "unit": "ns",
            "range": "± 64319.06925955916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1737255.2856445312,
            "unit": "ns",
            "range": "± 32312.295118141064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266217.578125,
            "unit": "ns",
            "range": "± 26660.785700098168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079417.9427083335,
            "unit": "ns",
            "range": "± 47919.36053860999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027287.98828125,
            "unit": "ns",
            "range": "± 26191.661119192446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903360.107421875,
            "unit": "ns",
            "range": "± 21303.213178277936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3636215.625,
            "unit": "ns",
            "range": "± 211336.94440177502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4425681.395348838,
            "unit": "ns",
            "range": "± 239316.04381291568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4618591.111111111,
            "unit": "ns",
            "range": "± 256776.5468894296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4223901.123595506,
            "unit": "ns",
            "range": "± 220151.5240043786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6994506.493506493,
            "unit": "ns",
            "range": "± 357164.2616859932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289396.77419354836,
            "unit": "ns",
            "range": "± 16480.485506335797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277574.62686567166,
            "unit": "ns",
            "range": "± 13054.13371525016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252065.05376344087,
            "unit": "ns",
            "range": "± 17550.845057299633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4735480.821917809,
            "unit": "ns",
            "range": "± 235656.56370231175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4353806.25,
            "unit": "ns",
            "range": "± 226874.06328920551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22305.31914893617,
            "unit": "ns",
            "range": "± 1868.319181434317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97226.08695652174,
            "unit": "ns",
            "range": "± 9581.539824002659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82715.9574468085,
            "unit": "ns",
            "range": "± 8546.738083569513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96392.70833333333,
            "unit": "ns",
            "range": "± 14444.574612830036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5953.191489361702,
            "unit": "ns",
            "range": "± 810.7745039595636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23092.63157894737,
            "unit": "ns",
            "range": "± 2432.1972425466925"
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
          "id": "d09953e64d077db97e2db22321160720cdffd564",
          "message": "Cleanup",
          "timestamp": "2023-08-31T10:58:27+09:00",
          "tree_id": "8bddffdd7ddaf0f509f919540d5c6a6553f773ef",
          "url": "https://github.com/greymistcube/libplanet/commit/d09953e64d077db97e2db22321160720cdffd564"
        },
        "date": 1693448073664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1260609.793814433,
            "unit": "ns",
            "range": "± 111641.2284393944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2378802.7027027025,
            "unit": "ns",
            "range": "± 118120.5200330125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641171.4285714286,
            "unit": "ns",
            "range": "± 144569.42826071102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4442035.897435897,
            "unit": "ns",
            "range": "± 227077.57183329144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50259.756097560974,
            "unit": "ns",
            "range": "± 2678.624105818322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7278438.461538462,
            "unit": "ns",
            "range": "± 49807.95683525439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20265332,
            "unit": "ns",
            "range": "± 532089.8606125348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49864544.44444445,
            "unit": "ns",
            "range": "± 1003392.8620214296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101909763.15789473,
            "unit": "ns",
            "range": "± 2127190.1474873493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197236860,
            "unit": "ns",
            "range": "± 2988148.7460107664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4494599.53125,
            "unit": "ns",
            "range": "± 15534.144009552458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1423837.265625,
            "unit": "ns",
            "range": "± 5795.356422295781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048338.6300223215,
            "unit": "ns",
            "range": "± 3095.946717335644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658307.5,
            "unit": "ns",
            "range": "± 6771.3219877182055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857543.7825520834,
            "unit": "ns",
            "range": "± 2306.0206399766757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759772.91015625,
            "unit": "ns",
            "range": "± 2720.6619056581394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3096972.222222222,
            "unit": "ns",
            "range": "± 144559.08604571508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3200547.222222222,
            "unit": "ns",
            "range": "± 104469.13552709132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3958043.4782608696,
            "unit": "ns",
            "range": "± 89690.62394540141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3596449.1525423727,
            "unit": "ns",
            "range": "± 159331.41276627473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5978869.696969697,
            "unit": "ns",
            "range": "± 185358.5941574609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253108.9552238806,
            "unit": "ns",
            "range": "± 12029.568764069638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240443.24324324325,
            "unit": "ns",
            "range": "± 6709.509857100034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209520,
            "unit": "ns",
            "range": "± 8393.729437952537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3960103.846153846,
            "unit": "ns",
            "range": "± 63087.9097686265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3593327.777777778,
            "unit": "ns",
            "range": "± 73390.95797452368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19469.38775510204,
            "unit": "ns",
            "range": "± 1850.9628680277704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79900,
            "unit": "ns",
            "range": "± 3570.3363409210606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69100,
            "unit": "ns",
            "range": "± 2477.9023386727736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76006.97674418605,
            "unit": "ns",
            "range": "± 8423.800884436268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4700,
            "unit": "ns",
            "range": "± 611.3509630318742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18077.659574468085,
            "unit": "ns",
            "range": "± 1488.7502339910543"
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
          "id": "ed23c9c45a2db2e722ef35a9e7bf21dfa3472ade",
          "message": "Changelog",
          "timestamp": "2023-08-31T10:59:12+09:00",
          "tree_id": "cc19ffb2d718014207da4c6d1616c77d970673f2",
          "url": "https://github.com/greymistcube/libplanet/commit/ed23c9c45a2db2e722ef35a9e7bf21dfa3472ade"
        },
        "date": 1693448137537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352173.7373737374,
            "unit": "ns",
            "range": "± 107788.32770272825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539520,
            "unit": "ns",
            "range": "± 118200.19458528822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792021,
            "unit": "ns",
            "range": "± 142640.8057097805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4724962.686567164,
            "unit": "ns",
            "range": "± 218324.4741453757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50785.10638297872,
            "unit": "ns",
            "range": "± 3333.439485841204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7919706.666666667,
            "unit": "ns",
            "range": "± 88641.2953317766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21117457.14285714,
            "unit": "ns",
            "range": "± 207814.39468276166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53422033.333333336,
            "unit": "ns",
            "range": "± 611616.1665931463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105679623.07692307,
            "unit": "ns",
            "range": "± 717887.1454412203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213860880,
            "unit": "ns",
            "range": "± 1633497.2155295694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4579683.854166667,
            "unit": "ns",
            "range": "± 16108.276083208311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438197.7734375,
            "unit": "ns",
            "range": "± 4735.702071565585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060676.9140625,
            "unit": "ns",
            "range": "± 3798.9923189417136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637984.1145833335,
            "unit": "ns",
            "range": "± 9076.509731496979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842017.7018229166,
            "unit": "ns",
            "range": "± 2716.9122679129637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765884.39453125,
            "unit": "ns",
            "range": "± 1959.6583942859202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3357558.8235294116,
            "unit": "ns",
            "range": "± 66695.88685615787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551746.153846154,
            "unit": "ns",
            "range": "± 91077.09363289643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4249186.666666667,
            "unit": "ns",
            "range": "± 60311.688829975654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943364.705882353,
            "unit": "ns",
            "range": "± 78623.77933214982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6159241.176470588,
            "unit": "ns",
            "range": "± 193553.0858472637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264568.4210526316,
            "unit": "ns",
            "range": "± 5703.5128192660495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252258.13953488372,
            "unit": "ns",
            "range": "± 9231.860787463926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235305.05050505052,
            "unit": "ns",
            "range": "± 13958.636955687633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4199546.666666667,
            "unit": "ns",
            "range": "± 42243.62786549109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867007.1428571427,
            "unit": "ns",
            "range": "± 50379.91761506859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22650.526315789473,
            "unit": "ns",
            "range": "± 1843.2668550072171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90995.65217391304,
            "unit": "ns",
            "range": "± 5982.096237454814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77865.625,
            "unit": "ns",
            "range": "± 5316.940713665292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89308.51063829787,
            "unit": "ns",
            "range": "± 11742.008580301994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6211.458333333333,
            "unit": "ns",
            "range": "± 879.8169416857082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21809.473684210527,
            "unit": "ns",
            "range": "± 2099.2943943352366"
          }
        ]
      }
    ]
  }
}