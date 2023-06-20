window.BENCHMARK_DATA = {
  "lastUpdate": 1687243562562,
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
      }
    ]
  }
}