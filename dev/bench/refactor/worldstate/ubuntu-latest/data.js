window.BENCHMARK_DATA = {
  "lastUpdate": 1705301962042,
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
          "id": "c2c91f158d66c99735446b52331b68c5a2f18328",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T13:49:52+09:00",
          "tree_id": "e873ef18847f0b94944d2301a00558690c39a59a",
          "url": "https://github.com/greymistcube/libplanet/commit/c2c91f158d66c99735446b52331b68c5a2f18328"
        },
        "date": 1704865364548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3706676.0169270835,
            "unit": "ns",
            "range": "± 9535.253126940757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214321.0859375,
            "unit": "ns",
            "range": "± 1698.332798129442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782539.0807291666,
            "unit": "ns",
            "range": "± 4618.911935348667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967738.9596354167,
            "unit": "ns",
            "range": "± 24920.678782163723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613250.5743001302,
            "unit": "ns",
            "range": "± 2384.4380513320734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587188.8641276042,
            "unit": "ns",
            "range": "± 1736.8160184603519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474526.1794871795,
            "unit": "ns",
            "range": "± 86573.65050603227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625103.375,
            "unit": "ns",
            "range": "± 49997.877157435396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3209506.8181818184,
            "unit": "ns",
            "range": "± 100160.09217886339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3207456.75,
            "unit": "ns",
            "range": "± 152788.15653633754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14014673.115789473,
            "unit": "ns",
            "range": "± 1035073.7847718552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39866.86842105263,
            "unit": "ns",
            "range": "± 5670.594871140874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201006.65,
            "unit": "ns",
            "range": "± 8726.692475009639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197117.5918367347,
            "unit": "ns",
            "range": "± 7758.0602867769285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173731.38461538462,
            "unit": "ns",
            "range": "± 2856.4717904687222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275188.5384615385,
            "unit": "ns",
            "range": "± 22440.09553461313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840260.9285714286,
            "unit": "ns",
            "range": "± 39977.18507755736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15312.670212765957,
            "unit": "ns",
            "range": "± 3049.48299738845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66361.37373737374,
            "unit": "ns",
            "range": "± 9235.702086596582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58373.357894736844,
            "unit": "ns",
            "range": "± 7466.763873519044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63350.93877551021,
            "unit": "ns",
            "range": "± 14313.536583318119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3470.0934065934066,
            "unit": "ns",
            "range": "± 352.30305697800003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14101.721649484536,
            "unit": "ns",
            "range": "± 3101.60727400014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5755609.9,
            "unit": "ns",
            "range": "± 39794.53128221802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846082.076923076,
            "unit": "ns",
            "range": "± 113551.69719153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37636323.833333336,
            "unit": "ns",
            "range": "± 323047.90248093754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76786651.4,
            "unit": "ns",
            "range": "± 1060685.5102944914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155061538,
            "unit": "ns",
            "range": "± 951843.7162910901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983773.5376344086,
            "unit": "ns",
            "range": "± 80567.94444854809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876409.8372093022,
            "unit": "ns",
            "range": "± 68731.3200492393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601601.9247311829,
            "unit": "ns",
            "range": "± 135750.74723809367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12822190.25,
            "unit": "ns",
            "range": "± 987489.7689491158"
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
          "id": "317a05b99efaccae95fcfc7558902778cf1a4304",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T14:33:08+09:00",
          "tree_id": "765a74f944205f529edc434565fa9c34f6c935e1",
          "url": "https://github.com/greymistcube/libplanet/commit/317a05b99efaccae95fcfc7558902778cf1a4304"
        },
        "date": 1704865458325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712519.469951923,
            "unit": "ns",
            "range": "± 8163.838110029877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211536.168782552,
            "unit": "ns",
            "range": "± 2510.0016165684897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788408.2454427084,
            "unit": "ns",
            "range": "± 12144.718890691913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952542.829264323,
            "unit": "ns",
            "range": "± 1821.929943173071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622600.3981933594,
            "unit": "ns",
            "range": "± 1503.4387494200803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577175.5085449219,
            "unit": "ns",
            "range": "± 1245.4390475884722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2467745.44,
            "unit": "ns",
            "range": "± 64935.10093295716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549090.38,
            "unit": "ns",
            "range": "± 58093.8909469834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176835.736842105,
            "unit": "ns",
            "range": "± 67978.25913305102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3201401.25,
            "unit": "ns",
            "range": "± 161190.321711458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13676766.65730337,
            "unit": "ns",
            "range": "± 891794.1417637321"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39923.666666666664,
            "unit": "ns",
            "range": "± 5897.944439882595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202799.6,
            "unit": "ns",
            "range": "± 9040.278203338103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190326.44444444444,
            "unit": "ns",
            "range": "± 8006.1870526402145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165637.05,
            "unit": "ns",
            "range": "± 3740.230846731536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3282681.6666666665,
            "unit": "ns",
            "range": "± 44379.60496455015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877812.1428571427,
            "unit": "ns",
            "range": "± 39804.15349772345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14806.102040816326,
            "unit": "ns",
            "range": "± 2645.708224672344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69213.97530864198,
            "unit": "ns",
            "range": "± 3614.7513468263223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53115.90909090909,
            "unit": "ns",
            "range": "± 1673.1754683018971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62002.88775510204,
            "unit": "ns",
            "range": "± 12752.95428145169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3738.8924731182797,
            "unit": "ns",
            "range": "± 1195.2184852330265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17462.58947368421,
            "unit": "ns",
            "range": "± 2265.4258652517956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5612898.846153846,
            "unit": "ns",
            "range": "± 29174.012482133687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14781440.866666667,
            "unit": "ns",
            "range": "± 140644.04774153724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37289732.333333336,
            "unit": "ns",
            "range": "± 124344.97567824862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75377435.58333333,
            "unit": "ns",
            "range": "± 334752.6500777601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154018190.07142857,
            "unit": "ns",
            "range": "± 354264.7416055409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973774.0795454546,
            "unit": "ns",
            "range": "± 76232.58796893804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906740.0961538462,
            "unit": "ns",
            "range": "± 77821.85598777972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574635.852631579,
            "unit": "ns",
            "range": "± 102139.30069043572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12705035.625,
            "unit": "ns",
            "range": "± 962782.9902694717"
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
          "id": "9d5838bbe977e57a1edbb9ba8e74cbe34877851a",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T16:18:46+09:00",
          "tree_id": "9a7b09fe5b4da2a43779332d4bcf807110efea2a",
          "url": "https://github.com/greymistcube/libplanet/commit/9d5838bbe977e57a1edbb9ba8e74cbe34877851a"
        },
        "date": 1704871804556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724170.341045673,
            "unit": "ns",
            "range": "± 15442.435022095691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201207.4046875,
            "unit": "ns",
            "range": "± 2338.6016090382636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764140.1526692709,
            "unit": "ns",
            "range": "± 1760.598085783496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938500.7283653845,
            "unit": "ns",
            "range": "± 4989.343437832256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624994.4634915865,
            "unit": "ns",
            "range": "± 3743.7542249754124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576735.5024789664,
            "unit": "ns",
            "range": "± 1191.9521107623589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2506570.880952381,
            "unit": "ns",
            "range": "± 90889.13388733749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536269.9375,
            "unit": "ns",
            "range": "± 93717.54780607122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3127168.86,
            "unit": "ns",
            "range": "± 82615.69054810352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3091926.0833333335,
            "unit": "ns",
            "range": "± 127924.22917165625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13774830.680851065,
            "unit": "ns",
            "range": "± 927665.6186260682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40144.447916666664,
            "unit": "ns",
            "range": "± 5692.980913499475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197340.54545454544,
            "unit": "ns",
            "range": "± 7421.345428871373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192168.7288135593,
            "unit": "ns",
            "range": "± 8263.804794633683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168766,
            "unit": "ns",
            "range": "± 4679.397240934087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3226310.5714285714,
            "unit": "ns",
            "range": "± 42030.629005184164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2922544.4,
            "unit": "ns",
            "range": "± 50823.54714078336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16394.84693877551,
            "unit": "ns",
            "range": "± 2587.61488056959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59672.241758241755,
            "unit": "ns",
            "range": "± 3657.307583882679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61630.07692307692,
            "unit": "ns",
            "range": "± 764.3572966375586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62370.9693877551,
            "unit": "ns",
            "range": "± 14212.511666855247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3201.2340425531916,
            "unit": "ns",
            "range": "± 746.6920227866101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13044.868686868687,
            "unit": "ns",
            "range": "± 2017.8170749319752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5627542.714285715,
            "unit": "ns",
            "range": "± 10974.175205934587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14500053.033333333,
            "unit": "ns",
            "range": "± 77045.07004888823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37223603.8,
            "unit": "ns",
            "range": "± 207172.72663139258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77690468.56666666,
            "unit": "ns",
            "range": "± 886674.7264598433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152749684.19230768,
            "unit": "ns",
            "range": "± 504903.65704382723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969016.5842105263,
            "unit": "ns",
            "range": "± 78292.57204321347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895204.9936708861,
            "unit": "ns",
            "range": "± 97577.18851876969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631352.09375,
            "unit": "ns",
            "range": "± 176310.74902497866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12830078.847826088,
            "unit": "ns",
            "range": "± 939355.3418762924"
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
          "id": "9a53103eff2ae42a75bac69880162fb8c56532e3",
          "message": "Minor cleanup",
          "timestamp": "2024-01-15T14:30:29+09:00",
          "tree_id": "7ff39cfea98c388bd92eea5d3f7282739e1297e7",
          "url": "https://github.com/greymistcube/libplanet/commit/9a53103eff2ae42a75bac69880162fb8c56532e3"
        },
        "date": 1705297336554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745643.9031808036,
            "unit": "ns",
            "range": "± 23212.32826975227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202907.4183872768,
            "unit": "ns",
            "range": "± 2853.963731071711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777772.3976702009,
            "unit": "ns",
            "range": "± 2485.569715220289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925645.7107747395,
            "unit": "ns",
            "range": "± 5854.352445498165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624768.6596354167,
            "unit": "ns",
            "range": "± 11415.032273138471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589805.9324079241,
            "unit": "ns",
            "range": "± 640.3941494442585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2527302.138888889,
            "unit": "ns",
            "range": "± 83084.3284002646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2578547.5384615385,
            "unit": "ns",
            "range": "± 28271.23402157331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3152507.8214285714,
            "unit": "ns",
            "range": "± 89864.80321635984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3123932.8684210526,
            "unit": "ns",
            "range": "± 157638.40200300963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13904433.868131869,
            "unit": "ns",
            "range": "± 916254.6163225858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39937.43877551021,
            "unit": "ns",
            "range": "± 5904.24531838897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199061.775,
            "unit": "ns",
            "range": "± 10429.919961554373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187906.60344827586,
            "unit": "ns",
            "range": "± 8223.40409716384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172813.06666666668,
            "unit": "ns",
            "range": "± 2592.999957761739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3250032.1333333333,
            "unit": "ns",
            "range": "± 27876.96193445832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2978061.1333333333,
            "unit": "ns",
            "range": "± 47281.07078474832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12308.155913978495,
            "unit": "ns",
            "range": "± 879.9773403039082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63377.77368421053,
            "unit": "ns",
            "range": "± 5765.4973479294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75637.63,
            "unit": "ns",
            "range": "± 17658.510401763564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61499.145833333336,
            "unit": "ns",
            "range": "± 8078.000987710769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3599.52688172043,
            "unit": "ns",
            "range": "± 280.67839368672816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15000.630434782608,
            "unit": "ns",
            "range": "± 1563.7434425852534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5554234.538461538,
            "unit": "ns",
            "range": "± 37757.39603621915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14495772.333333334,
            "unit": "ns",
            "range": "± 175422.00895948306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36595870.28571428,
            "unit": "ns",
            "range": "± 180036.6252321705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75225954.88461539,
            "unit": "ns",
            "range": "± 235946.2528739467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151751231.46153846,
            "unit": "ns",
            "range": "± 775604.3061025185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957408.8917525773,
            "unit": "ns",
            "range": "± 71039.97188006152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903672.5272727273,
            "unit": "ns",
            "range": "± 80103.11875346457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544722.2222222222,
            "unit": "ns",
            "range": "± 81192.85862592843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12660813.421052631,
            "unit": "ns",
            "range": "± 949867.7216383877"
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
          "id": "98d018454d5b276f781be7a64d9475b60b2d597c",
          "message": "Removed unnecessary code",
          "timestamp": "2024-01-15T15:47:49+09:00",
          "tree_id": "f028a2962dc1fa5700ae154e5e8426f455dee8a3",
          "url": "https://github.com/greymistcube/libplanet/commit/98d018454d5b276f781be7a64d9475b60b2d597c"
        },
        "date": 1705301955812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3684880.7698102677,
            "unit": "ns",
            "range": "± 42967.973101438256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202312.4459134615,
            "unit": "ns",
            "range": "± 1315.0302614673824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779782.2172851562,
            "unit": "ns",
            "range": "± 3838.0420488631853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998546.0919270834,
            "unit": "ns",
            "range": "± 4781.420153475319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614671.0257161459,
            "unit": "ns",
            "range": "± 772.4050038751966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594220.5579927885,
            "unit": "ns",
            "range": "± 1712.9771244162305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2364761.88,
            "unit": "ns",
            "range": "± 95508.95988909916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2463144.976190476,
            "unit": "ns",
            "range": "± 88889.41265757794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176088.2083333335,
            "unit": "ns",
            "range": "± 81978.95832361055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3106438.9433962265,
            "unit": "ns",
            "range": "± 99113.42350626049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13634232.858695652,
            "unit": "ns",
            "range": "± 956502.0283924608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40923.536082474224,
            "unit": "ns",
            "range": "± 5436.385709699231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202343.30985915492,
            "unit": "ns",
            "range": "± 9598.472080182568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191074.13157894736,
            "unit": "ns",
            "range": "± 6473.2531585897395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171837.40625,
            "unit": "ns",
            "range": "± 4797.347370931047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200554.785714286,
            "unit": "ns",
            "range": "± 28214.73772061079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792197.214285714,
            "unit": "ns",
            "range": "± 24490.490911870176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15107.673469387755,
            "unit": "ns",
            "range": "± 3244.6772583471625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65020.822916666664,
            "unit": "ns",
            "range": "± 5719.029980309582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60293.31764705882,
            "unit": "ns",
            "range": "± 3802.8624000367736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61169.62886597938,
            "unit": "ns",
            "range": "± 12308.349148308158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3292.073684210526,
            "unit": "ns",
            "range": "± 564.7910222092743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12034.032608695652,
            "unit": "ns",
            "range": "± 1120.0747272076912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5690198.214285715,
            "unit": "ns",
            "range": "± 20416.158654844457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14422686.785714285,
            "unit": "ns",
            "range": "± 110733.50051930193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36400209.5,
            "unit": "ns",
            "range": "± 189212.3093235175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75216182.21428572,
            "unit": "ns",
            "range": "± 608866.8036705791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151115275.64285713,
            "unit": "ns",
            "range": "± 1033210.3015996462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965695.6195652174,
            "unit": "ns",
            "range": "± 77810.12832287907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882518.7352941176,
            "unit": "ns",
            "range": "± 90072.31662435544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1583186.5408163266,
            "unit": "ns",
            "range": "± 137956.3260365708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12667357.382978724,
            "unit": "ns",
            "range": "± 1030434.2764847461"
          }
        ]
      }
    ]
  }
}