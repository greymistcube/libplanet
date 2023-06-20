window.BENCHMARK_DATA = {
  "lastUpdate": 1687245138844,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686749118864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853376.530612245,
            "unit": "ns",
            "range": "± 220065.2385937493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3434470.4081632653,
            "unit": "ns",
            "range": "± 253916.62127280008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2781008.6021505375,
            "unit": "ns",
            "range": "± 204617.16620999173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7183718.085106383,
            "unit": "ns",
            "range": "± 589837.1420871536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64212.5,
            "unit": "ns",
            "range": "± 13741.28048886581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10176936.842105264,
            "unit": "ns",
            "range": "± 221419.7577516673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25420194.444444444,
            "unit": "ns",
            "range": "± 508512.2885578864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65392900,
            "unit": "ns",
            "range": "± 951717.2681324735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133875589.1891892,
            "unit": "ns",
            "range": "± 4098644.5364957605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264028435.7142857,
            "unit": "ns",
            "range": "± 2708319.0503044054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6172260.440340909,
            "unit": "ns",
            "range": "± 150824.9161831499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927093.2250976562,
            "unit": "ns",
            "range": "± 27013.93940795047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1518613.2269965278,
            "unit": "ns",
            "range": "± 25273.884069926924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280546.484375,
            "unit": "ns",
            "range": "± 38901.97158141038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045562.98828125,
            "unit": "ns",
            "range": "± 10752.969063548397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901992.1484375,
            "unit": "ns",
            "range": "± 14599.846490931986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4221922.857142857,
            "unit": "ns",
            "range": "± 204462.50155576953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4469324.242424242,
            "unit": "ns",
            "range": "± 210201.72220666514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5469402.173913044,
            "unit": "ns",
            "range": "± 208747.75153985937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5464923.214285715,
            "unit": "ns",
            "range": "± 224679.07698118416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8793962.5,
            "unit": "ns",
            "range": "± 290361.4870692684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359106.25,
            "unit": "ns",
            "range": "± 33330.225929722044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323937.7551020408,
            "unit": "ns",
            "range": "± 41350.40735860908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288943.15789473685,
            "unit": "ns",
            "range": "± 38675.59473646766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5098983.333333333,
            "unit": "ns",
            "range": "± 283793.3431728332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4625743.333333333,
            "unit": "ns",
            "range": "± 233758.28086695427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27778.350515463917,
            "unit": "ns",
            "range": "± 8997.919051139497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106080,
            "unit": "ns",
            "range": "± 19099.40736520711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120724.74226804124,
            "unit": "ns",
            "range": "± 28012.36717552861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145433.68421052632,
            "unit": "ns",
            "range": "± 29091.735356788686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8797.67441860465,
            "unit": "ns",
            "range": "± 2262.5845057568204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27232.323232323233,
            "unit": "ns",
            "range": "± 9023.62916586371"
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
          "id": "63b67ed57ada1f205f73fb47bb27037d6897c542",
          "message": "Changelog",
          "timestamp": "2023-06-15T09:51:09+09:00",
          "tree_id": "b6c665558de10fbff0e8e63d41f6847d4eab2b02",
          "url": "https://github.com/greymistcube/libplanet/commit/63b67ed57ada1f205f73fb47bb27037d6897c542"
        },
        "date": 1686791680568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1857370.9677419355,
            "unit": "ns",
            "range": "± 153233.69235926316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3406651.0204081633,
            "unit": "ns",
            "range": "± 245359.20406531845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2814484.8484848486,
            "unit": "ns",
            "range": "± 268797.44834629074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7186684.693877551,
            "unit": "ns",
            "range": "± 502503.08125475596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66998.94736842105,
            "unit": "ns",
            "range": "± 19310.610547863136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9505434.736842105,
            "unit": "ns",
            "range": "± 689457.2883826231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25680041.379310343,
            "unit": "ns",
            "range": "± 736627.3706743465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65481600,
            "unit": "ns",
            "range": "± 517177.3241504161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140100553.84615386,
            "unit": "ns",
            "range": "± 1892365.9325543533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265798538.46153846,
            "unit": "ns",
            "range": "± 4319684.609540081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6269938.199013158,
            "unit": "ns",
            "range": "± 135526.3884516556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979107.6401654412,
            "unit": "ns",
            "range": "± 36862.81024999455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543981.2191611843,
            "unit": "ns",
            "range": "± 33655.6519484653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3358443.9453125,
            "unit": "ns",
            "range": "± 62692.36452002861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073327.3871527778,
            "unit": "ns",
            "range": "± 22668.88225913773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 998684.6435546875,
            "unit": "ns",
            "range": "± 18210.71306322666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4095338.709677419,
            "unit": "ns",
            "range": "± 307781.172275064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4348594.94949495,
            "unit": "ns",
            "range": "± 352725.335524925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5492162.5,
            "unit": "ns",
            "range": "± 301780.7049248552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5401153.0612244895,
            "unit": "ns",
            "range": "± 313066.0126706529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8937580.597014925,
            "unit": "ns",
            "range": "± 406411.08022908465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354151.06382978725,
            "unit": "ns",
            "range": "± 35304.724910507866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338952.12765957444,
            "unit": "ns",
            "range": "± 40543.64097341748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315488.17204301077,
            "unit": "ns",
            "range": "± 36727.44752983844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5263826.842105263,
            "unit": "ns",
            "range": "± 343870.93337429507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4753345.360824742,
            "unit": "ns",
            "range": "± 338423.63645677717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27884.065934065933,
            "unit": "ns",
            "range": "± 7929.946332734467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126514.28571428571,
            "unit": "ns",
            "range": "± 16902.949172308647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128641.48936170213,
            "unit": "ns",
            "range": "± 29107.521880366505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139945.83333333334,
            "unit": "ns",
            "range": "± 23738.15013706469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7487.777777777777,
            "unit": "ns",
            "range": "± 1924.2291775125204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26546.464646464647,
            "unit": "ns",
            "range": "± 9685.327774961013"
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
          "id": "ebc3e87b2c9d6ccf2872aad17840b572b16bf056",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:24:35+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/ebc3e87b2c9d6ccf2872aad17840b572b16bf056"
        },
        "date": 1687243538563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757296.9696969697,
            "unit": "ns",
            "range": "± 149410.30580424995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249065.9340659343,
            "unit": "ns",
            "range": "± 181516.22101973282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728324.175824176,
            "unit": "ns",
            "range": "± 165877.71020353743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6982012.121212121,
            "unit": "ns",
            "range": "± 411739.8515589438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67842.1052631579,
            "unit": "ns",
            "range": "± 12894.783531693245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9087677.272727273,
            "unit": "ns",
            "range": "± 340256.6410770555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25466739.285714287,
            "unit": "ns",
            "range": "± 646626.2566636761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64794817.85714286,
            "unit": "ns",
            "range": "± 1671273.7799197026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130800672.22222222,
            "unit": "ns",
            "range": "± 2671772.9101292747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262022542.85714287,
            "unit": "ns",
            "range": "± 2381063.501144713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6058181.919642857,
            "unit": "ns",
            "range": "± 101629.56360530322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2101398.1584821427,
            "unit": "ns",
            "range": "± 24404.743998278318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587600.859375,
            "unit": "ns",
            "range": "± 20488.71475176133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222923.828125,
            "unit": "ns",
            "range": "± 41875.344970063015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049342.885044643,
            "unit": "ns",
            "range": "± 13075.356884597268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980478.828125,
            "unit": "ns",
            "range": "± 17844.311513044995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3905275,
            "unit": "ns",
            "range": "± 233426.00675927039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4167457.8947368423,
            "unit": "ns",
            "range": "± 255994.8148489794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5424956.818181818,
            "unit": "ns",
            "range": "± 201804.31391628372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5290426.984126984,
            "unit": "ns",
            "range": "± 239370.38597008502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8725105.263157895,
            "unit": "ns",
            "range": "± 299778.7426855765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347195.74468085106,
            "unit": "ns",
            "range": "± 29515.109725827886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321076.34408602153,
            "unit": "ns",
            "range": "± 23656.184952122214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266051.5625,
            "unit": "ns",
            "range": "± 12339.650791121498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5061402.040816327,
            "unit": "ns",
            "range": "± 342035.8728939226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4505736.666666667,
            "unit": "ns",
            "range": "± 201429.69919431966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26047.95918367347,
            "unit": "ns",
            "range": "± 7129.266378183688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105778.26086956522,
            "unit": "ns",
            "range": "± 12332.827862904533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117155.20833333333,
            "unit": "ns",
            "range": "± 23937.224346816496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132019.587628866,
            "unit": "ns",
            "range": "± 24099.96386224494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8011.8279569892475,
            "unit": "ns",
            "range": "± 2108.41221231428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23758.76288659794,
            "unit": "ns",
            "range": "± 5856.935927053347"
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
          "id": "53b63b71769d9841f80884922382232a09558cb1",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:47:15+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/53b63b71769d9841f80884922382232a09558cb1"
        },
        "date": 1687244631159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1302210.8695652173,
            "unit": "ns",
            "range": "± 50075.579447519434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530920,
            "unit": "ns",
            "range": "± 94624.54179065234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2362905.4054054054,
            "unit": "ns",
            "range": "± 78658.76353643682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5482643.548387097,
            "unit": "ns",
            "range": "± 248198.62790136563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44798.969072164946,
            "unit": "ns",
            "range": "± 2923.7352980021133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7534678.571428572,
            "unit": "ns",
            "range": "± 106543.75900266324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20672346.666666668,
            "unit": "ns",
            "range": "± 192239.37037924753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52558990,
            "unit": "ns",
            "range": "± 457161.7169323908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106596220,
            "unit": "ns",
            "range": "± 995893.8061574925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214454353.33333334,
            "unit": "ns",
            "range": "± 1383038.2666261918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835471.5625,
            "unit": "ns",
            "range": "± 43892.11198682268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509378.1380208333,
            "unit": "ns",
            "range": "± 7627.9031943196915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181142.734375,
            "unit": "ns",
            "range": "± 8057.812202491861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640289.1145833335,
            "unit": "ns",
            "range": "± 11911.464187969163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842628.41796875,
            "unit": "ns",
            "range": "± 2504.287819470172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776347.4869791666,
            "unit": "ns",
            "range": "± 2160.1319882603766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3519605,
            "unit": "ns",
            "range": "± 123416.57194546131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526109.523809524,
            "unit": "ns",
            "range": "± 81808.92924835226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4235672.340425532,
            "unit": "ns",
            "range": "± 156242.36983404934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4319746.153846154,
            "unit": "ns",
            "range": "± 115416.90077547303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6846234.482758621,
            "unit": "ns",
            "range": "± 180946.52974184326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267933.3333333333,
            "unit": "ns",
            "range": "± 6372.231424966715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251955.55555555556,
            "unit": "ns",
            "range": "± 7538.527497157308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215063.63636363635,
            "unit": "ns",
            "range": "± 9140.090031900441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4023121.4285714286,
            "unit": "ns",
            "range": "± 62798.28731828512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3642180,
            "unit": "ns",
            "range": "± 63019.31903336128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17685.869565217392,
            "unit": "ns",
            "range": "± 1534.6962703220686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79688.65979381443,
            "unit": "ns",
            "range": "± 5276.932432149458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69007.14285714286,
            "unit": "ns",
            "range": "± 1969.0058727652713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76589.87341772152,
            "unit": "ns",
            "range": "± 3977.294368863338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4736.082474226804,
            "unit": "ns",
            "range": "± 720.7035866386502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16696.739130434784,
            "unit": "ns",
            "range": "± 1677.87483894219"
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
          "id": "00451a362a32a48897fb62af467f507d0b0cf11a",
          "message": "Suggestion",
          "timestamp": "2023-06-20T15:53:55+09:00",
          "tree_id": "a3ab4ca142355092a537ee37b6ed49a0a124e441",
          "url": "https://github.com/greymistcube/libplanet/commit/00451a362a32a48897fb62af467f507d0b0cf11a"
        },
        "date": 1687245118580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428301.0204081633,
            "unit": "ns",
            "range": "± 118678.25298219889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2660306.6666666665,
            "unit": "ns",
            "range": "± 118574.84994528994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236165.9574468085,
            "unit": "ns",
            "range": "± 139023.11214457746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5306346.666666667,
            "unit": "ns",
            "range": "± 197369.63315289686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48630.927835051545,
            "unit": "ns",
            "range": "± 3957.860344321745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7737792.105263158,
            "unit": "ns",
            "range": "± 260781.25283056777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21102530.769230768,
            "unit": "ns",
            "range": "± 140229.1064925264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52396313.333333336,
            "unit": "ns",
            "range": "± 677351.8908921995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106711285.71428572,
            "unit": "ns",
            "range": "± 1130604.2100488658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209598842.85714287,
            "unit": "ns",
            "range": "± 1277094.3995373524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908458.984375,
            "unit": "ns",
            "range": "± 25888.168535235098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1572998.671875,
            "unit": "ns",
            "range": "± 6806.773993908853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242364.092548077,
            "unit": "ns",
            "range": "± 4614.942921916242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711758.2868303573,
            "unit": "ns",
            "range": "± 15975.713355828866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852142.1247209822,
            "unit": "ns",
            "range": "± 5338.779483523255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781973.4895833334,
            "unit": "ns",
            "range": "± 2715.4061573369595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331329.7297297297,
            "unit": "ns",
            "range": "± 112508.32528421291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559900,
            "unit": "ns",
            "range": "± 93710.31159909778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4283630.303030303,
            "unit": "ns",
            "range": "± 133068.09930644647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4375296.296296297,
            "unit": "ns",
            "range": "± 181731.43564888518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6932160,
            "unit": "ns",
            "range": "± 151456.54718172643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271677.1929824561,
            "unit": "ns",
            "range": "± 11782.629732301752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267652.63157894736,
            "unit": "ns",
            "range": "± 11537.301387598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238602.1052631579,
            "unit": "ns",
            "range": "± 13698.71075582591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4187292.8571428573,
            "unit": "ns",
            "range": "± 67755.64369664901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817607.1428571427,
            "unit": "ns",
            "range": "± 33864.19630241933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22107.14285714286,
            "unit": "ns",
            "range": "± 2674.5170100624528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91257.29166666667,
            "unit": "ns",
            "range": "± 6956.734636181375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83825.51020408163,
            "unit": "ns",
            "range": "± 7734.593082339842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95608.53658536586,
            "unit": "ns",
            "range": "± 6774.228601148642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6723.711340206186,
            "unit": "ns",
            "range": "± 1194.8477235506737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21261.458333333332,
            "unit": "ns",
            "range": "± 2523.0044659270266"
          }
        ]
      }
    ]
  }
}