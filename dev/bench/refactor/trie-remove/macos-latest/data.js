window.BENCHMARK_DATA = {
  "lastUpdate": 1704177322277,
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137087772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7588936.692307692,
            "unit": "ns",
            "range": "± 77350.15744800246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18447111.285714287,
            "unit": "ns",
            "range": "± 264870.46569986985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47308718.09090909,
            "unit": "ns",
            "range": "± 877495.4129169977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90134921.66666667,
            "unit": "ns",
            "range": "± 829671.7609615079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191992464.41666666,
            "unit": "ns",
            "range": "± 4863238.401520802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38469.6914893617,
            "unit": "ns",
            "range": "± 8446.826644732528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220153.45833333334,
            "unit": "ns",
            "range": "± 15636.603014396209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218527.1505376344,
            "unit": "ns",
            "range": "± 16394.407176618013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213277.04255319148,
            "unit": "ns",
            "range": "± 13151.997992590117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3784276,
            "unit": "ns",
            "range": "± 94979.00922377763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425731.285714286,
            "unit": "ns",
            "range": "± 47187.37535764049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13958.626373626374,
            "unit": "ns",
            "range": "± 2061.953473170267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62492.35106382979,
            "unit": "ns",
            "range": "± 10258.060325891174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53166.64634146341,
            "unit": "ns",
            "range": "± 3638.8459509661843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65457.95918367347,
            "unit": "ns",
            "range": "± 15176.063303781342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3750.257894736842,
            "unit": "ns",
            "range": "± 898.8205358441112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12804.945652173914,
            "unit": "ns",
            "range": "± 1465.6843457612079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042107.0102040817,
            "unit": "ns",
            "range": "± 92639.66479811502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2193570.8068181816,
            "unit": "ns",
            "range": "± 120165.12379909534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1468461.4175257732,
            "unit": "ns",
            "range": "± 109997.93232930468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806142.142857143,
            "unit": "ns",
            "range": "± 327421.9605945858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2960442.076923077,
            "unit": "ns",
            "range": "± 23549.35824129658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3073892.03125,
            "unit": "ns",
            "range": "± 94087.15032951112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5961998.606382979,
            "unit": "ns",
            "range": "± 3637963.822407489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3825111.8255813955,
            "unit": "ns",
            "range": "± 357734.3663538284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14767566.361702127,
            "unit": "ns",
            "range": "± 1693275.7238075223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4294702.673177083,
            "unit": "ns",
            "range": "± 56190.221417178764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1351918.282421875,
            "unit": "ns",
            "range": "± 10931.509719367497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 875458.6250651042,
            "unit": "ns",
            "range": "± 6553.158294825995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951859.6671875,
            "unit": "ns",
            "range": "± 30463.86328795098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634193.1753255208,
            "unit": "ns",
            "range": "± 5505.903215614679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580666.8664899553,
            "unit": "ns",
            "range": "± 2288.3190623016353"
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
          "id": "95cfec37da79f242d617736cfa0cf72c50e0aeac",
          "message": "Changelog and docs",
          "timestamp": "2024-01-02T11:39:24+09:00",
          "tree_id": "52f9c0e9e8bf9d1c4285be37d1a1c00e7a22c39e",
          "url": "https://github.com/greymistcube/libplanet/commit/95cfec37da79f242d617736cfa0cf72c50e0aeac"
        },
        "date": 1704163953395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207937.729166667,
            "unit": "ns",
            "range": "± 304933.29683885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20311531.666666668,
            "unit": "ns",
            "range": "± 437500.0560689323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51991629.25,
            "unit": "ns",
            "range": "± 1829279.9132559735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102280047.58333333,
            "unit": "ns",
            "range": "± 1313359.4196833526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205899089.2,
            "unit": "ns",
            "range": "± 5474739.351971197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35814.55617977528,
            "unit": "ns",
            "range": "± 4299.02359781093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220974.70253164557,
            "unit": "ns",
            "range": "± 11463.427118091186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232273,
            "unit": "ns",
            "range": "± 22569.629581644258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228910.63186813187,
            "unit": "ns",
            "range": "± 19582.413761790787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937978.272727273,
            "unit": "ns",
            "range": "± 96360.55709389546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3522322.8666666667,
            "unit": "ns",
            "range": "± 56474.16568012906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19341.67525773196,
            "unit": "ns",
            "range": "± 3212.470823506642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77806.26288659793,
            "unit": "ns",
            "range": "± 14135.387146694697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78137,
            "unit": "ns",
            "range": "± 16743.51661106622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89662.82291666667,
            "unit": "ns",
            "range": "± 17125.180877412677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6284.557894736842,
            "unit": "ns",
            "range": "± 1482.3951056557485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18579.96907216495,
            "unit": "ns",
            "range": "± 3579.1228367134177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069901.5208333333,
            "unit": "ns",
            "range": "± 98185.81711621342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2249358.2133333334,
            "unit": "ns",
            "range": "± 113312.35622483607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561499.4842105263,
            "unit": "ns",
            "range": "± 108941.47170852048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6440885.7105263155,
            "unit": "ns",
            "range": "± 143013.71262092277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954062.7972972975,
            "unit": "ns",
            "range": "± 144631.82266316537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2988927.891891892,
            "unit": "ns",
            "range": "± 145709.22226722998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3575971.2,
            "unit": "ns",
            "range": "± 84490.8901381751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3445552.4423076925,
            "unit": "ns",
            "range": "± 139941.10895958965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13071655.775510205,
            "unit": "ns",
            "range": "± 2002864.6334481516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4737224.948467548,
            "unit": "ns",
            "range": "± 193817.3509637967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381025.1762695312,
            "unit": "ns",
            "range": "± 25534.750765216242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 902522.1574869792,
            "unit": "ns",
            "range": "± 4572.478183205297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974795.779575893,
            "unit": "ns",
            "range": "± 25443.41961065466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635592.8072574013,
            "unit": "ns",
            "range": "± 13275.312340846865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558241.1129557291,
            "unit": "ns",
            "range": "± 5363.160469239719"
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
          "id": "a3e4edf120b75f72c25ddfa81f9aa241880111fa",
          "message": "Applied suggested name change",
          "timestamp": "2024-01-02T13:49:03+09:00",
          "tree_id": "d0dfbc70f4ea00675d9aad523767c771f86aa9fb",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e4edf120b75f72c25ddfa81f9aa241880111fa"
        },
        "date": 1704172113710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8596462.454545455,
            "unit": "ns",
            "range": "± 469709.3004845646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20966974.93023256,
            "unit": "ns",
            "range": "± 770159.0030436632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55279908.08974359,
            "unit": "ns",
            "range": "± 1926977.096808581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105775038.6764706,
            "unit": "ns",
            "range": "± 2126076.556781241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229003525.37931034,
            "unit": "ns",
            "range": "± 6022382.600544841"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71043.95698924731,
            "unit": "ns",
            "range": "± 10296.999136424227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359070.1666666667,
            "unit": "ns",
            "range": "± 47191.470869568504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384227.59793814435,
            "unit": "ns",
            "range": "± 70155.21509046029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329598.47826086957,
            "unit": "ns",
            "range": "± 35691.900498227136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4428997.677083333,
            "unit": "ns",
            "range": "± 350061.5393684522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162953.9270833335,
            "unit": "ns",
            "range": "± 405140.1972795731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20934.03125,
            "unit": "ns",
            "range": "± 3482.69201519419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107886.4,
            "unit": "ns",
            "range": "± 21384.055917853195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108993.11494252873,
            "unit": "ns",
            "range": "± 16052.28220927384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120748.76595744681,
            "unit": "ns",
            "range": "± 17047.04119656952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8885.397849462366,
            "unit": "ns",
            "range": "± 1361.9706481848514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25218.956043956045,
            "unit": "ns",
            "range": "± 4053.7898123226423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505063.46875,
            "unit": "ns",
            "range": "± 217378.3647914127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842084.6549295774,
            "unit": "ns",
            "range": "± 138233.04021043057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245289.0315789473,
            "unit": "ns",
            "range": "± 214203.1401241142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9734184.897260275,
            "unit": "ns",
            "range": "± 480715.7356243438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3255290.65,
            "unit": "ns",
            "range": "± 169311.01571922586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3636130.52020202,
            "unit": "ns",
            "range": "± 246175.52439419055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110042.032967033,
            "unit": "ns",
            "range": "± 664415.4695541948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317926.010638298,
            "unit": "ns",
            "range": "± 313879.6012263556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19027475.075757574,
            "unit": "ns",
            "range": "± 3458133.595407361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6538364.742697011,
            "unit": "ns",
            "range": "± 161965.06415674678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938723.7169249489,
            "unit": "ns",
            "range": "± 87501.51442155939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166512.2336154515,
            "unit": "ns",
            "range": "± 23486.920288679135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862259.628515625,
            "unit": "ns",
            "range": "± 193705.13640529418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967189.2102997449,
            "unit": "ns",
            "range": "± 38146.21811742025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785517.6127319336,
            "unit": "ns",
            "range": "± 14680.944634974214"
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
          "id": "4a3e409427c33b1fc7fce2180b16c607752645af",
          "message": "Added suggested tests",
          "timestamp": "2024-01-02T15:21:13+09:00",
          "tree_id": "98bb18f9dfaaa3c6d297cafe799ec8dba9cfe80f",
          "url": "https://github.com/greymistcube/libplanet/commit/4a3e409427c33b1fc7fce2180b16c607752645af"
        },
        "date": 1704177308273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7651917.352941177,
            "unit": "ns",
            "range": "± 154929.16818297206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18790551.133333333,
            "unit": "ns",
            "range": "± 290301.79478232324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47338816.10526316,
            "unit": "ns",
            "range": "± 1587044.2514456823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92616960.78571428,
            "unit": "ns",
            "range": "± 983169.4681476433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189824711.46666667,
            "unit": "ns",
            "range": "± 3464717.230230152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34479.555555555555,
            "unit": "ns",
            "range": "± 2671.350527906496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215307.4239130435,
            "unit": "ns",
            "range": "± 11715.020519118945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212960.36363636365,
            "unit": "ns",
            "range": "± 18907.818651884245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184262.4814814815,
            "unit": "ns",
            "range": "± 4845.813715667532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3928199.3333333335,
            "unit": "ns",
            "range": "± 80471.5656509729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449019.375,
            "unit": "ns",
            "range": "± 67151.30892432402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12731.315217391304,
            "unit": "ns",
            "range": "± 826.0413465072512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56964.88043478261,
            "unit": "ns",
            "range": "± 3899.685918157043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61677.4595959596,
            "unit": "ns",
            "range": "± 11003.112247960027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60824.18085106383,
            "unit": "ns",
            "range": "± 11290.957962170454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3490.1704545454545,
            "unit": "ns",
            "range": "± 495.6227064643119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12129.145833333334,
            "unit": "ns",
            "range": "± 1432.5242717088909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038624.3979591837,
            "unit": "ns",
            "range": "± 88257.96294386013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2205388.0722891567,
            "unit": "ns",
            "range": "± 116863.61657544349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517371.0416666667,
            "unit": "ns",
            "range": "± 86253.2225317642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6728500.066666666,
            "unit": "ns",
            "range": "± 300504.8078609921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180666,
            "unit": "ns",
            "range": "± 45778.25894965359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3002293.714285714,
            "unit": "ns",
            "range": "± 85744.70937673374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3600166.864864865,
            "unit": "ns",
            "range": "± 116088.55667409977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449005.04,
            "unit": "ns",
            "range": "± 139187.16652120787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12983715.737373738,
            "unit": "ns",
            "range": "± 1973254.9850249328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4398637.078725962,
            "unit": "ns",
            "range": "± 58258.50949503509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1376507.3863467262,
            "unit": "ns",
            "range": "± 29754.14070609215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 919267.7058048692,
            "unit": "ns",
            "range": "± 68947.84159569854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959384.4397615131,
            "unit": "ns",
            "range": "± 40992.30402441449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634347.4244791666,
            "unit": "ns",
            "range": "± 13173.466959712136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573655.846484375,
            "unit": "ns",
            "range": "± 10298.283091247526"
          }
        ]
      }
    ]
  }
}