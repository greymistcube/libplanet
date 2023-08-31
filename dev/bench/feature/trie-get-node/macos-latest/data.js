window.BENCHMARK_DATA = {
  "lastUpdate": 1693448255676,
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
        "date": 1693388770650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9529045.905263158,
            "unit": "ns",
            "range": "± 761562.0407662287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22217279.297872342,
            "unit": "ns",
            "range": "± 1763038.4436103902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55006936.614583336,
            "unit": "ns",
            "range": "± 3169256.634907491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120720734.2,
            "unit": "ns",
            "range": "± 4188006.1090779295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216296273.11764705,
            "unit": "ns",
            "range": "± 6423283.139535055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85669.70652173914,
            "unit": "ns",
            "range": "± 7657.0543852044675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344035.5416666667,
            "unit": "ns",
            "range": "± 45727.79342056683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336545.77368421055,
            "unit": "ns",
            "range": "± 40136.27195884152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310296.6384615385,
            "unit": "ns",
            "range": "± 13998.197734303292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4181207.8085106383,
            "unit": "ns",
            "range": "± 237940.2147394564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689053.8636363638,
            "unit": "ns",
            "range": "± 129982.25199396584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23952.315217391304,
            "unit": "ns",
            "range": "± 4150.023126982687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109943.04210526316,
            "unit": "ns",
            "range": "± 17356.533690310665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108591.30927835051,
            "unit": "ns",
            "range": "± 14853.634980452334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109999.04736842106,
            "unit": "ns",
            "range": "± 14188.007318715472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7542.561224489796,
            "unit": "ns",
            "range": "± 1240.9064928704215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22397.778350515466,
            "unit": "ns",
            "range": "± 3576.700550502365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641778.7613636365,
            "unit": "ns",
            "range": "± 159964.96538387472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3180047.0126582277,
            "unit": "ns",
            "range": "± 280918.01666352147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309080.8139534886,
            "unit": "ns",
            "range": "± 284951.3370437552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11622901.878787879,
            "unit": "ns",
            "range": "± 5222491.259676091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3259856.714285714,
            "unit": "ns",
            "range": "± 182246.60359988944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388471.3333333335,
            "unit": "ns",
            "range": "± 123017.53437754387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4404634.111111111,
            "unit": "ns",
            "range": "± 201634.5802419774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987656.0306122447,
            "unit": "ns",
            "range": "± 302575.7303989581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7124947.174157304,
            "unit": "ns",
            "range": "± 448614.4867159627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6076967.403245192,
            "unit": "ns",
            "range": "± 280371.64931503456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803433.2539911685,
            "unit": "ns",
            "range": "± 45479.36594053568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1038991.703125,
            "unit": "ns",
            "range": "± 16541.15183621153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2856418.6061883224,
            "unit": "ns",
            "range": "± 94474.93440914225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826412.7131076389,
            "unit": "ns",
            "range": "± 16895.68026096473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749863.9435221354,
            "unit": "ns",
            "range": "± 14320.123372400922"
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
        "date": 1693390014285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13888670,
            "unit": "ns",
            "range": "± 5544972.357591783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29303762.322580647,
            "unit": "ns",
            "range": "± 6199225.721054493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63251028.346938774,
            "unit": "ns",
            "range": "± 15839329.914106872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129635004.76530612,
            "unit": "ns",
            "range": "± 34322252.301613465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285913209.2979798,
            "unit": "ns",
            "range": "± 73631422.50503951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76869.36363636363,
            "unit": "ns",
            "range": "± 9674.656836329206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324925.1703296703,
            "unit": "ns",
            "range": "± 33437.51430522808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320546.5869565217,
            "unit": "ns",
            "range": "± 30210.228965107555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313593.9294117647,
            "unit": "ns",
            "range": "± 26869.78505894689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4521306.105882353,
            "unit": "ns",
            "range": "± 393987.6903277993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4123253.7065217393,
            "unit": "ns",
            "range": "± 542961.2606173857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22888.644444444446,
            "unit": "ns",
            "range": "± 2814.9266831856144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97974.85263157895,
            "unit": "ns",
            "range": "± 14724.515519225883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97342.14285714286,
            "unit": "ns",
            "range": "± 17390.201598874133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95258.72105263158,
            "unit": "ns",
            "range": "± 15145.281817920486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6906.9315789473685,
            "unit": "ns",
            "range": "± 1098.9946629556157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22168.457446808512,
            "unit": "ns",
            "range": "± 3701.747226706305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708441.305263158,
            "unit": "ns",
            "range": "± 270086.3468087793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3163083.0561797754,
            "unit": "ns",
            "range": "± 305772.8902166071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173513.4545454546,
            "unit": "ns",
            "range": "± 332057.62254834274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6746032.770114942,
            "unit": "ns",
            "range": "± 1497181.0172482422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3519828.0056179776,
            "unit": "ns",
            "range": "± 343672.32566607697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3636666.7078651683,
            "unit": "ns",
            "range": "± 405087.53370905144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4716036.803370787,
            "unit": "ns",
            "range": "± 585447.8246684019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4226277.488888889,
            "unit": "ns",
            "range": "± 493910.17742215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9710953.659574468,
            "unit": "ns",
            "range": "± 3003882.700275312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5817265.330729167,
            "unit": "ns",
            "range": "± 78892.93658555501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2368680.2492578123,
            "unit": "ns",
            "range": "± 556351.7455748691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438961.2440419823,
            "unit": "ns",
            "range": "± 290930.5274984174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3888337.3835685486,
            "unit": "ns",
            "range": "± 569426.5309154874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974113.3400213068,
            "unit": "ns",
            "range": "± 40727.129921971275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1000862.1574276194,
            "unit": "ns",
            "range": "± 31970.15500891021"
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
        "date": 1693390137838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10356354.43478261,
            "unit": "ns",
            "range": "± 2304087.0952424444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28852618,
            "unit": "ns",
            "range": "± 6493609.037186645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 80808688.96808511,
            "unit": "ns",
            "range": "± 17203749.23193287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133589172.53191489,
            "unit": "ns",
            "range": "± 31173968.528109685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 310232912.3979592,
            "unit": "ns",
            "range": "± 71857307.26280248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85411.07692307692,
            "unit": "ns",
            "range": "± 12556.365721754904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370855.5543478261,
            "unit": "ns",
            "range": "± 52064.20043347669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349045.76086956525,
            "unit": "ns",
            "range": "± 48042.27765662962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328828.89130434784,
            "unit": "ns",
            "range": "± 36369.187193707156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4923372.142857143,
            "unit": "ns",
            "range": "± 922385.0789351554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4472781.159340659,
            "unit": "ns",
            "range": "± 665060.5421646333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29227.758620689656,
            "unit": "ns",
            "range": "± 3120.8571272168806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123915.07777777778,
            "unit": "ns",
            "range": "± 19002.74082551049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118658.51086956522,
            "unit": "ns",
            "range": "± 14248.706208854688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113460.62222222223,
            "unit": "ns",
            "range": "± 15927.967949545471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8849.063829787234,
            "unit": "ns",
            "range": "± 1457.4059501075296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27835.59411764706,
            "unit": "ns",
            "range": "± 4369.742892141066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1823940.322222222,
            "unit": "ns",
            "range": "± 328477.9590477167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3521155.8298969073,
            "unit": "ns",
            "range": "± 593311.6026987969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2362107.2717391304,
            "unit": "ns",
            "range": "± 491369.20384869806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7097610.277777778,
            "unit": "ns",
            "range": "± 1781886.1772958755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3634918.375,
            "unit": "ns",
            "range": "± 491135.32524861686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4243549.329787234,
            "unit": "ns",
            "range": "± 1085186.203657082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5274843.347826087,
            "unit": "ns",
            "range": "± 987264.5237141215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4788188.97752809,
            "unit": "ns",
            "range": "± 805755.0333806482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10270409.92857143,
            "unit": "ns",
            "range": "± 3140819.0492849965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8596246.386521464,
            "unit": "ns",
            "range": "± 1549068.6057515738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989250.7409446023,
            "unit": "ns",
            "range": "± 257998.9910183546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097216.4065896738,
            "unit": "ns",
            "range": "± 41580.98760705395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2863487.9266183036,
            "unit": "ns",
            "range": "± 43550.75855533541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860410.6994140625,
            "unit": "ns",
            "range": "± 7675.34659851757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753729.4581473215,
            "unit": "ns",
            "range": "± 5348.270511009862"
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
        "date": 1693390317471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10756983.532258065,
            "unit": "ns",
            "range": "± 2972509.378439099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30199553.797872342,
            "unit": "ns",
            "range": "± 6024087.787948431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78246471.19101124,
            "unit": "ns",
            "range": "± 13529468.393318813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148458071.8548387,
            "unit": "ns",
            "range": "± 27976045.033582732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301627920.69,
            "unit": "ns",
            "range": "± 64830613.3888104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73856.33146067416,
            "unit": "ns",
            "range": "± 8765.965529504068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352381.9516129032,
            "unit": "ns",
            "range": "± 32974.95669098126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336201.532967033,
            "unit": "ns",
            "range": "± 40908.275352834724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313823.5930232558,
            "unit": "ns",
            "range": "± 28682.24586810286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4413383.505747126,
            "unit": "ns",
            "range": "± 495299.24738405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4168873.2586206896,
            "unit": "ns",
            "range": "± 538340.3122144814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27895.955555555556,
            "unit": "ns",
            "range": "± 3910.7244362112783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88380.8125,
            "unit": "ns",
            "range": "± 10891.826595941226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99955.81052631579,
            "unit": "ns",
            "range": "± 18744.48127764471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102546.53125,
            "unit": "ns",
            "range": "± 17766.70329248574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6730.734693877551,
            "unit": "ns",
            "range": "± 1139.186794427656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22233.224719101123,
            "unit": "ns",
            "range": "± 3851.006744856139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561415.5329670329,
            "unit": "ns",
            "range": "± 178162.0682980933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3063877.652173913,
            "unit": "ns",
            "range": "± 213396.419050639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134272.425531915,
            "unit": "ns",
            "range": "± 249151.24504995075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5946679.528735632,
            "unit": "ns",
            "range": "± 601115.1200247296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3583419.7808988765,
            "unit": "ns",
            "range": "± 446832.0370091537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3911280.081395349,
            "unit": "ns",
            "range": "± 699659.0753170847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493019.126436782,
            "unit": "ns",
            "range": "± 407069.2246973681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4213323.956521739,
            "unit": "ns",
            "range": "± 593120.6776672422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9285687.833333334,
            "unit": "ns",
            "range": "± 2701505.7160720443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5985637.3511513155,
            "unit": "ns",
            "range": "± 203418.5732607615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1783616.74609375,
            "unit": "ns",
            "range": "± 29282.77592973123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415181.5893110796,
            "unit": "ns",
            "range": "± 310450.1335027084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3551553.691366793,
            "unit": "ns",
            "range": "± 739662.6823460849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917918.910909017,
            "unit": "ns",
            "range": "± 134540.15230633857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766678.0317095588,
            "unit": "ns",
            "range": "± 36585.70480837283"
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
        "date": 1693390526256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10896739.27173913,
            "unit": "ns",
            "range": "± 2944606.5409764512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30018117.46875,
            "unit": "ns",
            "range": "± 7048951.622018284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79426460.06842105,
            "unit": "ns",
            "range": "± 13078817.075736688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106627943.7962963,
            "unit": "ns",
            "range": "± 2927199.0386911463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289555284.4484536,
            "unit": "ns",
            "range": "± 71057257.47662385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77553.89285714286,
            "unit": "ns",
            "range": "± 7644.931766292861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386723.23863636365,
            "unit": "ns",
            "range": "± 61340.88725208849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394546.402173913,
            "unit": "ns",
            "range": "± 85261.00090124812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335537.5934065934,
            "unit": "ns",
            "range": "± 42110.34620163712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4621013.076470588,
            "unit": "ns",
            "range": "± 642064.1659102931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4496397.170454546,
            "unit": "ns",
            "range": "± 636231.0540941582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29496.571428571428,
            "unit": "ns",
            "range": "± 4124.900836444331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131808.3111111111,
            "unit": "ns",
            "range": "± 14055.904428224487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120600.21875,
            "unit": "ns",
            "range": "± 5586.684851853429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120473.98888888888,
            "unit": "ns",
            "range": "± 15440.721862851571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8563.101123595505,
            "unit": "ns",
            "range": "± 1110.4597230318604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28227.058139534885,
            "unit": "ns",
            "range": "± 2710.2308230531003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1884561.923076923,
            "unit": "ns",
            "range": "± 445143.7617872887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171794.730769231,
            "unit": "ns",
            "range": "± 334459.65457077435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170932.0319148935,
            "unit": "ns",
            "range": "± 309321.1460986699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7327447.257894737,
            "unit": "ns",
            "range": "± 2190907.076193099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3648393.4623655914,
            "unit": "ns",
            "range": "± 454148.77772467525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4076330.5568181816,
            "unit": "ns",
            "range": "± 750589.6092584135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4998916.612903226,
            "unit": "ns",
            "range": "± 812279.5436214227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4161202.25,
            "unit": "ns",
            "range": "± 471382.5076618933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9875037.104166666,
            "unit": "ns",
            "range": "± 3260485.7717808913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6578752.312775736,
            "unit": "ns",
            "range": "± 353151.1842032048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842571.3736478365,
            "unit": "ns",
            "range": "± 22038.422007400783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067739.6231770834,
            "unit": "ns",
            "range": "± 12664.370624647448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189575.3010850693,
            "unit": "ns",
            "range": "± 374630.88047223736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908454.5875281894,
            "unit": "ns",
            "range": "± 52703.62961982044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875776.555718316,
            "unit": "ns",
            "range": "± 29151.58197055883"
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
        "date": 1693391165312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8512985.92857143,
            "unit": "ns",
            "range": "± 304966.756873949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19083991.954545453,
            "unit": "ns",
            "range": "± 410917.9406933802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48540322.75675676,
            "unit": "ns",
            "range": "± 1641397.7711866053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100621348.98148148,
            "unit": "ns",
            "range": "± 4174420.609156268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211558217.109375,
            "unit": "ns",
            "range": "± 9727102.562887534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78823.65909090909,
            "unit": "ns",
            "range": "± 10775.497280987083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302072.3367346939,
            "unit": "ns",
            "range": "± 29206.177497479996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293326.67045454547,
            "unit": "ns",
            "range": "± 14937.598500014075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278701.55263157893,
            "unit": "ns",
            "range": "± 16668.935990350194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4331175.520408163,
            "unit": "ns",
            "range": "± 302513.22056852636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775863.88,
            "unit": "ns",
            "range": "± 100553.41887247462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22419.9375,
            "unit": "ns",
            "range": "± 5195.8946503085745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95038.3085106383,
            "unit": "ns",
            "range": "± 12554.477669300266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100930.52083333333,
            "unit": "ns",
            "range": "± 16050.16886350203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107987.34536082474,
            "unit": "ns",
            "range": "± 19434.59362694748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7191.552083333333,
            "unit": "ns",
            "range": "± 1656.6897328537354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20630.5,
            "unit": "ns",
            "range": "± 3752.2636054567333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692377.2391304348,
            "unit": "ns",
            "range": "± 276952.0782621271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3140063.040229885,
            "unit": "ns",
            "range": "± 309775.6895586391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224452,
            "unit": "ns",
            "range": "± 275293.56525527866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11581043.050505051,
            "unit": "ns",
            "range": "± 5493300.704961253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3288696.5185185187,
            "unit": "ns",
            "range": "± 173188.71674665407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483121.6666666665,
            "unit": "ns",
            "range": "± 260542.54130538198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4352909.809859155,
            "unit": "ns",
            "range": "± 200298.48562501426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3792397.381818182,
            "unit": "ns",
            "range": "± 157067.3863908348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7130897.8125,
            "unit": "ns",
            "range": "± 549317.851587725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028777.1978125,
            "unit": "ns",
            "range": "± 242070.37348336188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777588.6868990385,
            "unit": "ns",
            "range": "± 47682.22698810124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052949.4799107143,
            "unit": "ns",
            "range": "± 16550.56438661285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2858189.6674005683,
            "unit": "ns",
            "range": "± 121435.55208821045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787194.1586538461,
            "unit": "ns",
            "range": "± 4738.525264857454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793995.8717651367,
            "unit": "ns",
            "range": "± 14290.507691537066"
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
        "date": 1693448239927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10085729.067415731,
            "unit": "ns",
            "range": "± 574512.7448793178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 34872420.825581394,
            "unit": "ns",
            "range": "± 16413600.45510527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59181570.81318682,
            "unit": "ns",
            "range": "± 5990960.823419308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108953436.67391305,
            "unit": "ns",
            "range": "± 2729646.433146619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233740339.5,
            "unit": "ns",
            "range": "± 3732698.3524267874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75128.91379310345,
            "unit": "ns",
            "range": "± 4412.147651263692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348570.58510638296,
            "unit": "ns",
            "range": "± 42167.33789854024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357618.65555555554,
            "unit": "ns",
            "range": "± 42153.97092252791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324852.18823529413,
            "unit": "ns",
            "range": "± 20171.133639373842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4582963.5625,
            "unit": "ns",
            "range": "± 389677.62052977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4523619.121212121,
            "unit": "ns",
            "range": "± 520282.7520115183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24284.544444444444,
            "unit": "ns",
            "range": "± 2998.886201148803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123198.58947368422,
            "unit": "ns",
            "range": "± 23570.290043483354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117891.7052631579,
            "unit": "ns",
            "range": "± 15879.005562593866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122081.74489795919,
            "unit": "ns",
            "range": "± 24096.06179668183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8084.202127659574,
            "unit": "ns",
            "range": "± 832.1488032486212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22804.224719101123,
            "unit": "ns",
            "range": "± 3009.6916096655336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640182.994949495,
            "unit": "ns",
            "range": "± 252723.98912584677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856951.4285714286,
            "unit": "ns",
            "range": "± 121604.80629315111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029312.693877551,
            "unit": "ns",
            "range": "± 232448.2627425045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5471469.304347826,
            "unit": "ns",
            "range": "± 204443.91143637736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3615884.1616161615,
            "unit": "ns",
            "range": "± 375887.3178859646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3775012.1907216497,
            "unit": "ns",
            "range": "± 434196.25338710984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4825346.5,
            "unit": "ns",
            "range": "± 420834.7628266722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314562.744897959,
            "unit": "ns",
            "range": "± 393591.8656668014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7767938.329545454,
            "unit": "ns",
            "range": "± 999219.3009898637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949022.473772322,
            "unit": "ns",
            "range": "± 103188.71451565193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1973415.7238769531,
            "unit": "ns",
            "range": "± 37194.685402693256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1128477.4623697917,
            "unit": "ns",
            "range": "± 19723.567586724042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875754.360595703,
            "unit": "ns",
            "range": "± 55318.16951950989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 979071.3928385417,
            "unit": "ns",
            "range": "± 14704.300230944447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799800.1123697917,
            "unit": "ns",
            "range": "± 12338.3431661105"
          }
        ]
      }
    ]
  }
}