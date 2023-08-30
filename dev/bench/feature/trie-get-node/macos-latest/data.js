window.BENCHMARK_DATA = {
  "lastUpdate": 1693390157127,
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
      }
    ]
  }
}