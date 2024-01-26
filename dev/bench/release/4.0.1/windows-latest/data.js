window.BENCHMARK_DATA = {
  "lastUpdate": 1706254503996,
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
          "id": "0d725d42ce3ab3a084b5628aa13d51a18762c422",
          "message": "Changelog",
          "timestamp": "2024-01-26T16:21:33+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/0d725d42ce3ab3a084b5628aa13d51a18762c422"
        },
        "date": 1706254439281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043707.2164948453,
            "unit": "ns",
            "range": "± 118072.79644304073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852735.9550561798,
            "unit": "ns",
            "range": "± 107005.40050856292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595259.5959595959,
            "unit": "ns",
            "range": "± 170508.83687626373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11523710.98901099,
            "unit": "ns",
            "range": "± 903590.5250659785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34989.55223880597,
            "unit": "ns",
            "range": "± 1657.867773390852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5030620,
            "unit": "ns",
            "range": "± 33170.73150491904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12970392.307692308,
            "unit": "ns",
            "range": "± 124913.14623595108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32564270,
            "unit": "ns",
            "range": "± 444467.246423015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65147833.333333336,
            "unit": "ns",
            "range": "± 794631.9468485904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130135542.85714285,
            "unit": "ns",
            "range": "± 879720.6704528307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305558.6197916665,
            "unit": "ns",
            "range": "± 13675.450768415867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066453.0831473214,
            "unit": "ns",
            "range": "± 3113.1174084349095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739343.1640625,
            "unit": "ns",
            "range": "± 1745.9442573588133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000179.4921875,
            "unit": "ns",
            "range": "± 5370.494216430091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641346.3936941965,
            "unit": "ns",
            "range": "± 1164.3028147274952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568780.3013392857,
            "unit": "ns",
            "range": "± 1586.9396690004014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123830.612244898,
            "unit": "ns",
            "range": "± 48963.83105620598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2162411.86440678,
            "unit": "ns",
            "range": "± 79127.12618431302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790519.0476190476,
            "unit": "ns",
            "range": "± 63906.87458362847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2871473.737373737,
            "unit": "ns",
            "range": "± 322912.7406572039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12350295.652173912,
            "unit": "ns",
            "range": "± 1543640.5085191722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173598.5507246377,
            "unit": "ns",
            "range": "± 7955.5842901778415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166635.7142857143,
            "unit": "ns",
            "range": "± 10458.091725533992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141246.66666666666,
            "unit": "ns",
            "range": "± 4209.163512060843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838760,
            "unit": "ns",
            "range": "± 49184.910578056646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503193.75,
            "unit": "ns",
            "range": "± 48962.740510855125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11329.787234042553,
            "unit": "ns",
            "range": "± 1846.4048058137334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56734.73684210526,
            "unit": "ns",
            "range": "± 6326.670470201671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44544.61538461538,
            "unit": "ns",
            "range": "± 2072.8928132888627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53002.29885057471,
            "unit": "ns",
            "range": "± 9422.486427041928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2519.5876288659792,
            "unit": "ns",
            "range": "± 518.9410642632689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10219.354838709678,
            "unit": "ns",
            "range": "± 1303.278313274387"
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
          "id": "3b31da77123c4f85fceb80393183ae02cbdd5171",
          "message": "Libplanet 4.0.1",
          "timestamp": "2024-01-26T16:22:06+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/3b31da77123c4f85fceb80393183ae02cbdd5171"
        },
        "date": 1706254463278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925118.75,
            "unit": "ns",
            "range": "± 86439.16548039649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679516.3934426229,
            "unit": "ns",
            "range": "± 75060.81574369739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1488236.170212766,
            "unit": "ns",
            "range": "± 153334.46669828714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10921591.397849463,
            "unit": "ns",
            "range": "± 888706.0194775512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34058.82352941176,
            "unit": "ns",
            "range": "± 1805.56640088677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5262442.857142857,
            "unit": "ns",
            "range": "± 64987.04858290214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12945031.25,
            "unit": "ns",
            "range": "± 129887.6423105755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32021571.42857143,
            "unit": "ns",
            "range": "± 148537.45670354008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64616946.666666664,
            "unit": "ns",
            "range": "± 243870.5273198016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132807560,
            "unit": "ns",
            "range": "± 1002154.0206689076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278703.575721154,
            "unit": "ns",
            "range": "± 10684.138010357556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057162.0572916667,
            "unit": "ns",
            "range": "± 7743.326673225467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750893.6802455357,
            "unit": "ns",
            "range": "± 4898.66451203864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927100.1255580357,
            "unit": "ns",
            "range": "± 4211.809499124505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609406.54296875,
            "unit": "ns",
            "range": "± 1711.5961854104805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553106.7683293269,
            "unit": "ns",
            "range": "± 757.5289296086937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2291036.7346938774,
            "unit": "ns",
            "range": "± 200447.3884685631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249822.6415094337,
            "unit": "ns",
            "range": "± 87769.26402945885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2843821.8181818184,
            "unit": "ns",
            "range": "± 119917.59931829284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2856090.909090909,
            "unit": "ns",
            "range": "± 89774.7750054141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12746213.636363637,
            "unit": "ns",
            "range": "± 1548226.1469535911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188698.27586206896,
            "unit": "ns",
            "range": "± 6715.927425584862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171812.28070175438,
            "unit": "ns",
            "range": "± 7418.126211600075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144641.66666666666,
            "unit": "ns",
            "range": "± 1422.8386053835118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2855233.3333333335,
            "unit": "ns",
            "range": "± 48471.13524955809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450453.3333333335,
            "unit": "ns",
            "range": "± 32388.11216362895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8967.741935483871,
            "unit": "ns",
            "range": "± 1001.4295532238533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56339.393939393936,
            "unit": "ns",
            "range": "± 11024.599749149285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42872.916666666664,
            "unit": "ns",
            "range": "± 1645.9802205752117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49708.080808080806,
            "unit": "ns",
            "range": "± 8920.930179006535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2169.4736842105262,
            "unit": "ns",
            "range": "± 418.2215854219841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8906.382978723404,
            "unit": "ns",
            "range": "± 1089.1259700474925"
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
          "id": "3de4ba9d18a5de4eabe89a2b26935a78ad2acf2e",
          "message": "Release 4.0.1",
          "timestamp": "2024-01-26T16:22:24+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/3de4ba9d18a5de4eabe89a2b26935a78ad2acf2e"
        },
        "date": 1706254477333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025524,
            "unit": "ns",
            "range": "± 129959.81983565987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775605.2631578948,
            "unit": "ns",
            "range": "± 76546.07021044029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567884.375,
            "unit": "ns",
            "range": "± 150771.630256264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10966990.804597702,
            "unit": "ns",
            "range": "± 843848.9432263505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35464.912280701756,
            "unit": "ns",
            "range": "± 1545.210483590016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5105557.142857143,
            "unit": "ns",
            "range": "± 64533.541836614095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13403085.714285715,
            "unit": "ns",
            "range": "± 210871.85630192517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33638513.333333336,
            "unit": "ns",
            "range": "± 373123.25590244046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68217008.33333333,
            "unit": "ns",
            "range": "± 276830.4090572202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133773653.33333333,
            "unit": "ns",
            "range": "± 829500.2134389345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418929.4270833335,
            "unit": "ns",
            "range": "± 7407.182324028404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088575.0651041667,
            "unit": "ns",
            "range": "± 1812.1635698547125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737998.5072544643,
            "unit": "ns",
            "range": "± 1778.3403611159297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949693.0859375,
            "unit": "ns",
            "range": "± 1728.6876787100255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623162.9255022322,
            "unit": "ns",
            "range": "± 882.5286085580651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565166.7643229166,
            "unit": "ns",
            "range": "± 654.8825105010318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177866.6666666665,
            "unit": "ns",
            "range": "± 45490.88591964754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2436323.8095238097,
            "unit": "ns",
            "range": "± 88559.49580552435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2892112.9032258065,
            "unit": "ns",
            "range": "± 85272.04208467346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2954562,
            "unit": "ns",
            "range": "± 119238.33086276735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12473138.636363637,
            "unit": "ns",
            "range": "± 1483157.4575908366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177842,
            "unit": "ns",
            "range": "± 6671.844281939513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170519.67213114753,
            "unit": "ns",
            "range": "± 7663.6331608476485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145192.3076923077,
            "unit": "ns",
            "range": "± 3927.5359274662865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2866900,
            "unit": "ns",
            "range": "± 37563.30042024447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519533.3333333335,
            "unit": "ns",
            "range": "± 53434.423802066245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12427.173913043478,
            "unit": "ns",
            "range": "± 1596.2940088932478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57718.88888888889,
            "unit": "ns",
            "range": "± 5238.425324003011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47122.07792207792,
            "unit": "ns",
            "range": "± 2412.228898136773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64652.04081632653,
            "unit": "ns",
            "range": "± 15219.285307683387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2960.204081632653,
            "unit": "ns",
            "range": "± 583.7560209042229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11658.695652173914,
            "unit": "ns",
            "range": "± 1713.2420377695876"
          }
        ]
      }
    ]
  }
}