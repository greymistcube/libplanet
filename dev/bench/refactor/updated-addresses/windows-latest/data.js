window.BENCHMARK_DATA = {
  "lastUpdate": 1699930667696,
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
          "id": "0e72cb326937cc8187ec97be38ce02d3030a35e5",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:48:20+09:00",
          "tree_id": "f5e73c27bae6c711624a26ac0ac99945fe783f9c",
          "url": "https://github.com/greymistcube/libplanet/commit/0e72cb326937cc8187ec97be38ce02d3030a35e5"
        },
        "date": 1699002257000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374679.5918367347,
            "unit": "ns",
            "range": "± 114626.24783449553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540863.559322034,
            "unit": "ns",
            "range": "± 111280.240303211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2010733.3333333333,
            "unit": "ns",
            "range": "± 127416.07837704591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7955492.105263158,
            "unit": "ns",
            "range": "± 271824.3474781731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61234.69387755102,
            "unit": "ns",
            "range": "± 6724.414695578082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7695594.444444444,
            "unit": "ns",
            "range": "± 156245.25299978658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19123096.666666668,
            "unit": "ns",
            "range": "± 344902.1431956496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48015893.333333336,
            "unit": "ns",
            "range": "± 412353.0378322971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96739933.33333333,
            "unit": "ns",
            "range": "± 762541.8580236073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194925821.42857143,
            "unit": "ns",
            "range": "± 1685483.850721791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483052.34375,
            "unit": "ns",
            "range": "± 5734.602812297788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1459200.4817708333,
            "unit": "ns",
            "range": "± 5996.122689565362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099261.704799107,
            "unit": "ns",
            "range": "± 2621.4407663238444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829414.7977941176,
            "unit": "ns",
            "range": "± 57968.447782218296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810706.5150669643,
            "unit": "ns",
            "range": "± 2843.7311980730706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742061.3932291666,
            "unit": "ns",
            "range": "± 2805.1828270288966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236952.380952381,
            "unit": "ns",
            "range": "± 76311.4579800938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3365815.0684931506,
            "unit": "ns",
            "range": "± 166996.63059744058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4112094.117647059,
            "unit": "ns",
            "range": "± 84206.43139472954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3914051.6393442624,
            "unit": "ns",
            "range": "± 167512.6567275871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9646825.581395349,
            "unit": "ns",
            "range": "± 233679.63834624126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287175,
            "unit": "ns",
            "range": "± 7350.163767386915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272609.375,
            "unit": "ns",
            "range": "± 7853.840620995565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254264.2857142857,
            "unit": "ns",
            "range": "± 4297.334977877325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4140994.117647059,
            "unit": "ns",
            "range": "± 80361.71718072788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739166.6666666665,
            "unit": "ns",
            "range": "± 64541.632927532766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25973.958333333332,
            "unit": "ns",
            "range": "± 2417.7521004640334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114850,
            "unit": "ns",
            "range": "± 6191.27944583917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82996,
            "unit": "ns",
            "range": "± 11039.345793821098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67763.33333333333,
            "unit": "ns",
            "range": "± 7530.87204166059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3961.4583333333335,
            "unit": "ns",
            "range": "± 408.4295446982946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15390.425531914894,
            "unit": "ns",
            "range": "± 1293.2470719156997"
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
          "id": "7c248d21166d26575b7d9f0aee1f847c19c708ca",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:51:30+09:00",
          "tree_id": "0b94b76b85071abe723cfd5e4c3bd6b1e16ee0ff",
          "url": "https://github.com/greymistcube/libplanet/commit/7c248d21166d26575b7d9f0aee1f847c19c708ca"
        },
        "date": 1699002590659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583867.3684210526,
            "unit": "ns",
            "range": "± 143762.66082420858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2969004.109589041,
            "unit": "ns",
            "range": "± 147778.3056533184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366911.7021276597,
            "unit": "ns",
            "range": "± 178945.45925635964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10424001.176470589,
            "unit": "ns",
            "range": "± 646597.4596915394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63283.87096774193,
            "unit": "ns",
            "range": "± 7143.167765235543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9882257.142857144,
            "unit": "ns",
            "range": "± 224076.14904631992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26593855.319148935,
            "unit": "ns",
            "range": "± 1009342.8326538942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66402212.5,
            "unit": "ns",
            "range": "± 2052886.7290767299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134175105,
            "unit": "ns",
            "range": "± 4697431.805045314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263368312.5,
            "unit": "ns",
            "range": "± 7985467.347575441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726738.098958333,
            "unit": "ns",
            "range": "± 91336.25148367335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858654.0405273438,
            "unit": "ns",
            "range": "± 36173.16062834359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347547.6806640625,
            "unit": "ns",
            "range": "± 25198.396944988053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335671.6796875,
            "unit": "ns",
            "range": "± 63268.115322837824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1055039.84375,
            "unit": "ns",
            "range": "± 30537.120160550698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959673.2014973959,
            "unit": "ns",
            "range": "± 23934.42914357488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4003631.8181818184,
            "unit": "ns",
            "range": "± 95921.41320280114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4175850,
            "unit": "ns",
            "range": "± 139522.29212566715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5010107.407407408,
            "unit": "ns",
            "range": "± 199479.08657759312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4807557.5,
            "unit": "ns",
            "range": "± 169828.81862220966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12376090.476190476,
            "unit": "ns",
            "range": "± 534974.3348424223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308908.77192982455,
            "unit": "ns",
            "range": "± 12125.464360795106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299396.8253968254,
            "unit": "ns",
            "range": "± 13647.095499255372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284526.8656716418,
            "unit": "ns",
            "range": "± 13537.462969977081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4924058.620689655,
            "unit": "ns",
            "range": "± 140081.53624953414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5411691.666666667,
            "unit": "ns",
            "range": "± 46010.46241362014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27825.8064516129,
            "unit": "ns",
            "range": "± 2497.7338958155146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110778.94736842105,
            "unit": "ns",
            "range": "± 8646.705124987035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98192.63157894737,
            "unit": "ns",
            "range": "± 12383.158107011615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104889.47368421052,
            "unit": "ns",
            "range": "± 11214.973593315686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7098.958333333333,
            "unit": "ns",
            "range": "± 917.9490631054321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24537.5,
            "unit": "ns",
            "range": "± 2401.2825520410634"
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
          "id": "5ff19af73580788ad4e9bb51d63a23bfeb637802",
          "message": "Changelog",
          "timestamp": "2023-11-03T17:55:04+09:00",
          "tree_id": "d12bb875589ed67deba30e725361ffe6eaa7e75c",
          "url": "https://github.com/greymistcube/libplanet/commit/5ff19af73580788ad4e9bb51d63a23bfeb637802"
        },
        "date": 1699002810523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557409.2783505155,
            "unit": "ns",
            "range": "± 137977.4121629411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2925635.9375,
            "unit": "ns",
            "range": "± 134917.1896130193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276093.9393939395,
            "unit": "ns",
            "range": "± 165602.3044169385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10363112.64367816,
            "unit": "ns",
            "range": "± 753325.8623187434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62781.57894736842,
            "unit": "ns",
            "range": "± 6069.828823656252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9781642,
            "unit": "ns",
            "range": "± 382331.9884923178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26384436.170212764,
            "unit": "ns",
            "range": "± 946428.1043517004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64398213.333333336,
            "unit": "ns",
            "range": "± 1917437.8462674741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131035760,
            "unit": "ns",
            "range": "± 1277381.2160599737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258981586.36363637,
            "unit": "ns",
            "range": "± 6085665.437206905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5581277.2727272725,
            "unit": "ns",
            "range": "± 135474.18763130205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1782609.8266601562,
            "unit": "ns",
            "range": "± 31975.56411072318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317803.0598958333,
            "unit": "ns",
            "range": "± 24509.267907437814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248245.3776041665,
            "unit": "ns",
            "range": "± 65878.51381178919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037409.453125,
            "unit": "ns",
            "range": "± 18014.554982656235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931455.1106770834,
            "unit": "ns",
            "range": "± 12889.85462953284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3998253.846153846,
            "unit": "ns",
            "range": "± 50872.10459221267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4098930.303030303,
            "unit": "ns",
            "range": "± 126905.20695791132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5055305.263157895,
            "unit": "ns",
            "range": "± 217488.6470116253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4792598.75,
            "unit": "ns",
            "range": "± 236536.14570772438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12264620.930232558,
            "unit": "ns",
            "range": "± 689980.5966779543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291714.28571428574,
            "unit": "ns",
            "range": "± 12598.666815578305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286225.43859649124,
            "unit": "ns",
            "range": "± 12351.348693010852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262620.8333333333,
            "unit": "ns",
            "range": "± 16497.86535899444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4942977.027027027,
            "unit": "ns",
            "range": "± 164689.43777885672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4523965.7894736845,
            "unit": "ns",
            "range": "± 155789.93354065955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25805.154639175256,
            "unit": "ns",
            "range": "± 2344.3358660654753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100344.21052631579,
            "unit": "ns",
            "range": "± 10237.818041608256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86131.57894736843,
            "unit": "ns",
            "range": "± 7920.4188471598945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99860.82474226804,
            "unit": "ns",
            "range": "± 13187.790729030954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6029.787234042553,
            "unit": "ns",
            "range": "± 825.5112182449016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23791.57894736842,
            "unit": "ns",
            "range": "± 2206.261069305954"
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
          "id": "2850e75da3082f6811ef47634342ac38f72f04ca",
          "message": "Changelog",
          "timestamp": "2023-11-07T14:01:09+09:00",
          "tree_id": "5142e2927802dea256b965da5710b9b9886b60e6",
          "url": "https://github.com/greymistcube/libplanet/commit/2850e75da3082f6811ef47634342ac38f72f04ca"
        },
        "date": 1699334040973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003869.387755102,
            "unit": "ns",
            "range": "± 107452.42788981133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1764145.7627118644,
            "unit": "ns",
            "range": "± 77201.73153774132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432124.2105263157,
            "unit": "ns",
            "range": "± 140008.65149240303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5337431.37254902,
            "unit": "ns",
            "range": "± 215137.60479302175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34227.27272727273,
            "unit": "ns",
            "range": "± 1462.7209055566436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4926261.538461538,
            "unit": "ns",
            "range": "± 29429.025877567954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12804913.333333334,
            "unit": "ns",
            "range": "± 233182.49403377072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31953360,
            "unit": "ns",
            "range": "± 422464.6203276334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63047385.71428572,
            "unit": "ns",
            "range": "± 422825.1895690061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128077220,
            "unit": "ns",
            "range": "± 891465.541518171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333227.8180803573,
            "unit": "ns",
            "range": "± 13035.711151683132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072010.1725260417,
            "unit": "ns",
            "range": "± 2469.9228991995396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732826.6666666666,
            "unit": "ns",
            "range": "± 4142.5075585114655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947486.09375,
            "unit": "ns",
            "range": "± 7413.028025796151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635326.1858258928,
            "unit": "ns",
            "range": "± 1991.438232502909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559060.64453125,
            "unit": "ns",
            "range": "± 1420.4576158287255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123116,
            "unit": "ns",
            "range": "± 56403.65443243313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272833.3333333335,
            "unit": "ns",
            "range": "± 106883.94904803325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2907380.5555555555,
            "unit": "ns",
            "range": "± 95217.70489460888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2662530,
            "unit": "ns",
            "range": "± 181359.1534090643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6451266,
            "unit": "ns",
            "range": "± 255915.79399545962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166941.25,
            "unit": "ns",
            "range": "± 8666.970529807804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161172.41379310345,
            "unit": "ns",
            "range": "± 7057.328978940928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143984,
            "unit": "ns",
            "range": "± 3786.4539259488333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783387.5,
            "unit": "ns",
            "range": "± 54320.32001623947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548592.8571428573,
            "unit": "ns",
            "range": "± 44186.44874559679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10044.086021505376,
            "unit": "ns",
            "range": "± 1340.219187588634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51270,
            "unit": "ns",
            "range": "± 4395.406182097165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44936.50793650794,
            "unit": "ns",
            "range": "± 2051.773551243206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50663.15789473684,
            "unit": "ns",
            "range": "± 7330.046771084983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2292.7083333333335,
            "unit": "ns",
            "range": "± 356.9593200076877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9911.827956989247,
            "unit": "ns",
            "range": "± 1250.2912236725167"
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
          "id": "798ce5a532622090373c406e1d0687e86988d997",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:57:24+09:00",
          "tree_id": "b072baa6cae459b35c939eea5ba681ae8eb907f9",
          "url": "https://github.com/greymistcube/libplanet/commit/798ce5a532622090373c406e1d0687e86988d997"
        },
        "date": 1699888134352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992324.4897959183,
            "unit": "ns",
            "range": "± 112182.8405031057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718519.6078431373,
            "unit": "ns",
            "range": "± 67927.06093923937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1435316.4948453608,
            "unit": "ns",
            "range": "± 128618.73379651677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5596334.848484849,
            "unit": "ns",
            "range": "± 262265.61256888125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33837.70491803279,
            "unit": "ns",
            "range": "± 1461.4107264815766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4865580,
            "unit": "ns",
            "range": "± 47458.49615340605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12934346.666666666,
            "unit": "ns",
            "range": "± 171842.41479858666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31752093.333333332,
            "unit": "ns",
            "range": "± 393683.4124497694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65130853.333333336,
            "unit": "ns",
            "range": "± 967533.9860156014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126583715.38461539,
            "unit": "ns",
            "range": "± 1020979.2177497655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303836.746651786,
            "unit": "ns",
            "range": "± 4371.409451418824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089630.8463541667,
            "unit": "ns",
            "range": "± 1462.4530704904043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742703.0901227678,
            "unit": "ns",
            "range": "± 1413.1948298646228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2008212.1694711538,
            "unit": "ns",
            "range": "± 3807.4833645978943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631019.2533052885,
            "unit": "ns",
            "range": "± 1193.0106377190996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571652.0883413461,
            "unit": "ns",
            "range": "± 1072.2851905642965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160015,
            "unit": "ns",
            "range": "± 49240.305217319044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2256334.090909091,
            "unit": "ns",
            "range": "± 81089.02929032606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2777450,
            "unit": "ns",
            "range": "± 85391.88221597587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2685777.6119402987,
            "unit": "ns",
            "range": "± 116642.89821202862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6486862.162162162,
            "unit": "ns",
            "range": "± 184665.92862570833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171347.8260869565,
            "unit": "ns",
            "range": "± 8187.752846489189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166100,
            "unit": "ns",
            "range": "± 8474.653007040677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142383.63636363635,
            "unit": "ns",
            "range": "± 5699.862364691886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754692.3076923075,
            "unit": "ns",
            "range": "± 23418.42086686111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516074.193548387,
            "unit": "ns",
            "range": "± 76043.48303324853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10419.101123595505,
            "unit": "ns",
            "range": "± 1293.2408554141643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53636.458333333336,
            "unit": "ns",
            "range": "± 5746.103847810667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44119.230769230766,
            "unit": "ns",
            "range": "± 2105.9012749462354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53754.34782608696,
            "unit": "ns",
            "range": "± 8995.571719407622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2493.75,
            "unit": "ns",
            "range": "± 537.0117121137754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9601.162790697674,
            "unit": "ns",
            "range": "± 1141.9018383738296"
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
          "id": "7fd73275a52ea6d4676a16f72c6011bd80ed9b05",
          "message": "Changelog",
          "timestamp": "2023-11-14T11:36:54+09:00",
          "tree_id": "5b0805250ca7bc9038df196c115713b35ae40f22",
          "url": "https://github.com/greymistcube/libplanet/commit/7fd73275a52ea6d4676a16f72c6011bd80ed9b05"
        },
        "date": 1699930632848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484156.701030928,
            "unit": "ns",
            "range": "± 199618.66662214592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767807.5268817204,
            "unit": "ns",
            "range": "± 292946.9907666777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174980.8080808083,
            "unit": "ns",
            "range": "± 257825.2982618854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10619330.681818182,
            "unit": "ns",
            "range": "± 960948.5544087255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63715.625,
            "unit": "ns",
            "range": "± 19276.90916546748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8834820,
            "unit": "ns",
            "range": "± 581683.1371481841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21294641,
            "unit": "ns",
            "range": "± 1824942.0113712316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60990221.428571425,
            "unit": "ns",
            "range": "± 4836666.055201256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108543827.05882353,
            "unit": "ns",
            "range": "± 5845236.042372011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221984109.52380952,
            "unit": "ns",
            "range": "± 10158057.062947687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5239745.2734375,
            "unit": "ns",
            "range": "± 120441.7102202679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728833.8485054348,
            "unit": "ns",
            "range": "± 39305.28854700216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287738.8736979167,
            "unit": "ns",
            "range": "± 33084.63608484514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996741.2760416665,
            "unit": "ns",
            "range": "± 74037.52741084325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971012.6302083334,
            "unit": "ns",
            "range": "± 12199.490953466966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917181.4852627841,
            "unit": "ns",
            "range": "± 22370.063777582705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298848.4210526315,
            "unit": "ns",
            "range": "± 292015.6330933066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415005.154639175,
            "unit": "ns",
            "range": "± 277000.9756191957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4528879.5698924735,
            "unit": "ns",
            "range": "± 399988.52607433294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137363.9175257734,
            "unit": "ns",
            "range": "± 398747.944661779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12385459.550561797,
            "unit": "ns",
            "range": "± 1096720.0348932082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282202.0408163265,
            "unit": "ns",
            "range": "± 37968.89388708376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288010.4166666667,
            "unit": "ns",
            "range": "± 47936.869623477134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234543.29896907217,
            "unit": "ns",
            "range": "± 38668.96070929202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4270297.894736842,
            "unit": "ns",
            "range": "± 311056.59332481585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934998.9795918367,
            "unit": "ns",
            "range": "± 303721.4165397748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25358,
            "unit": "ns",
            "range": "± 11516.068528079986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96321.21212121213,
            "unit": "ns",
            "range": "± 20510.396929100112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89889.69072164949,
            "unit": "ns",
            "range": "± 21202.193698098406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99698.91304347826,
            "unit": "ns",
            "range": "± 20424.729110690863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5811.111111111111,
            "unit": "ns",
            "range": "± 1090.9684847449155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23631,
            "unit": "ns",
            "range": "± 9657.338184410899"
          }
        ]
      }
    ]
  }
}