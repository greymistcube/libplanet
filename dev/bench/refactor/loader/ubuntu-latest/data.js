window.BENCHMARK_DATA = {
  "lastUpdate": 1683881290465,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720169015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279729.01960784313,
            "unit": "ns",
            "range": "± 10149.13973790921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268530.3076923077,
            "unit": "ns",
            "range": "± 2732.6950184941174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236489.55,
            "unit": "ns",
            "range": "± 5210.479445310191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242360.133333334,
            "unit": "ns",
            "range": "± 23589.34505802708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729865.4285714286,
            "unit": "ns",
            "range": "± 19962.394590885076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17831.239583333332,
            "unit": "ns",
            "range": "± 1180.1931754883597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84383.25,
            "unit": "ns",
            "range": "± 3959.241650071636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72954.66666666667,
            "unit": "ns",
            "range": "± 2630.7157948923204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89091.77551020408,
            "unit": "ns",
            "range": "± 11373.896764019328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.204301075269,
            "unit": "ns",
            "range": "± 481.184195029842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17681.239583333332,
            "unit": "ns",
            "range": "± 1479.1448934028826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272828.533333333,
            "unit": "ns",
            "range": "± 33769.43708627387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3467845,
            "unit": "ns",
            "range": "± 70450.70425147936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220360.5,
            "unit": "ns",
            "range": "± 85028.53714817646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232010.655172414,
            "unit": "ns",
            "range": "± 115059.97413966207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6633114.5,
            "unit": "ns",
            "range": "± 75427.3768177046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6200202.735491072,
            "unit": "ns",
            "range": "± 11797.545434279009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836176.2447916667,
            "unit": "ns",
            "range": "± 506.0691265374599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365051.6463448661,
            "unit": "ns",
            "range": "± 454.17112163204104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514759.728125,
            "unit": "ns",
            "range": "± 1377.7484254241797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796765.335546875,
            "unit": "ns",
            "range": "± 675.9720244113657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730919.3781550481,
            "unit": "ns",
            "range": "± 551.7362103392078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45796.56179775281,
            "unit": "ns",
            "range": "± 2467.476982277537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621752.5,
            "unit": "ns",
            "range": "± 28393.40424424171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19404656.533333335,
            "unit": "ns",
            "range": "± 96054.13231303234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49858049.13333333,
            "unit": "ns",
            "range": "± 389350.2104939655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100285523.06666666,
            "unit": "ns",
            "range": "± 280266.2333066968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199036406.2857143,
            "unit": "ns",
            "range": "± 543979.7309100671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362073.3870967743,
            "unit": "ns",
            "range": "± 78024.8302984979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519912.0434782607,
            "unit": "ns",
            "range": "± 55534.98894102566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154186.345454545,
            "unit": "ns",
            "range": "± 83084.22737783054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5116069.16,
            "unit": "ns",
            "range": "± 118159.36822137012"
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
          "id": "fe317ba5eac6d7b8038772df6772515155e5c863",
          "message": "Simple renaming",
          "timestamp": "2023-05-11T14:18:31+09:00",
          "tree_id": "add43c9de0533eb4bf46a9fcf89c94180ef0279e",
          "url": "https://github.com/greymistcube/libplanet/commit/fe317ba5eac6d7b8038772df6772515155e5c863"
        },
        "date": 1683783117667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284938.53571428574,
            "unit": "ns",
            "range": "± 7307.652379182629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280608.35294117645,
            "unit": "ns",
            "range": "± 6682.421181080606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247759.05405405405,
            "unit": "ns",
            "range": "± 8220.314555166724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4413814.428571428,
            "unit": "ns",
            "range": "± 63649.04965235814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096929.6,
            "unit": "ns",
            "range": "± 27544.62545916561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19262.936170212764,
            "unit": "ns",
            "range": "± 1483.1689613543565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90674.52083333333,
            "unit": "ns",
            "range": "± 5801.387434742008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76759.12631578947,
            "unit": "ns",
            "range": "± 4783.8068483790175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92245.25806451614,
            "unit": "ns",
            "range": "± 11167.656550233945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5453.177083333333,
            "unit": "ns",
            "range": "± 827.7931090974957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19987.40425531915,
            "unit": "ns",
            "range": "± 1510.6628276708302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432670.9,
            "unit": "ns",
            "range": "± 76557.00008277285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643436.84,
            "unit": "ns",
            "range": "± 94996.8445198225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563207.733333333,
            "unit": "ns",
            "range": "± 81075.45093083415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635362.111111111,
            "unit": "ns",
            "range": "± 126526.18713723726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7117009.258064516,
            "unit": "ns",
            "range": "± 216144.9863571468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5993966.572916667,
            "unit": "ns",
            "range": "± 32498.198696140436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845386.2057756695,
            "unit": "ns",
            "range": "± 3350.184013746113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362900.35703125,
            "unit": "ns",
            "range": "± 2815.299126297267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581881.021354167,
            "unit": "ns",
            "range": "± 3809.9674959430013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841239.1438151042,
            "unit": "ns",
            "range": "± 2327.8386567304437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746462.8776041666,
            "unit": "ns",
            "range": "± 352.41319825866856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48542.48387096774,
            "unit": "ns",
            "range": "± 2755.261388266422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8443607.894736841,
            "unit": "ns",
            "range": "± 186439.44183982065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21853739.92857143,
            "unit": "ns",
            "range": "± 146729.98481169643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54547220.733333334,
            "unit": "ns",
            "range": "± 416938.47547046805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109447550.13333334,
            "unit": "ns",
            "range": "± 1141385.6454058604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216213040.4,
            "unit": "ns",
            "range": "± 2566547.1558731752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1455596.0543478262,
            "unit": "ns",
            "range": "± 95012.54023795776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703050.3125,
            "unit": "ns",
            "range": "± 81384.83211755381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312477.9166666665,
            "unit": "ns",
            "range": "± 113295.3939719553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5504344.851851852,
            "unit": "ns",
            "range": "± 149638.90766151377"
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
          "id": "5f85225bb96e54fbe23cd41fe123b5f91ed91cad",
          "message": "Added tests",
          "timestamp": "2023-05-11T13:47:25+09:00",
          "tree_id": "46f8b8a7f885fcc208e20c8d727a992ffe6aa996",
          "url": "https://github.com/greymistcube/libplanet/commit/5f85225bb96e54fbe23cd41fe123b5f91ed91cad"
        },
        "date": 1683783183248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339347.09375,
            "unit": "ns",
            "range": "± 15387.29153711641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354254.82795698923,
            "unit": "ns",
            "range": "± 22930.032398497966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343271.62352941174,
            "unit": "ns",
            "range": "± 18539.929399603887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5394899.578947368,
            "unit": "ns",
            "range": "± 233679.91009864843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4836737.45,
            "unit": "ns",
            "range": "± 109199.84640362971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22360.927835051545,
            "unit": "ns",
            "range": "± 4826.178101526573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110975.25263157894,
            "unit": "ns",
            "range": "± 15242.621887304302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122739.03125,
            "unit": "ns",
            "range": "± 16454.07842480215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126953.18947368421,
            "unit": "ns",
            "range": "± 17108.143664482384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8115.65625,
            "unit": "ns",
            "range": "± 1517.8727207449178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20697.01020408163,
            "unit": "ns",
            "range": "± 4685.379795132629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4250035.545454546,
            "unit": "ns",
            "range": "± 200116.40580231388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4403525.04,
            "unit": "ns",
            "range": "± 112320.61527960928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5558216.521739131,
            "unit": "ns",
            "range": "± 213864.73096793782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5486290.219178082,
            "unit": "ns",
            "range": "± 271913.82226325385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8975463.607142856,
            "unit": "ns",
            "range": "± 384205.11935918615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7832944.283922697,
            "unit": "ns",
            "range": "± 270068.9172068275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2367718.586647727,
            "unit": "ns",
            "range": "± 57556.34617581669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1697687.9339425224,
            "unit": "ns",
            "range": "± 47679.95349139881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3473116.484140625,
            "unit": "ns",
            "range": "± 263582.19581700116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022903.4967447916,
            "unit": "ns",
            "range": "± 18663.58114729996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 951321.834123884,
            "unit": "ns",
            "range": "± 15930.281287086325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72502.46875,
            "unit": "ns",
            "range": "± 9656.714410140396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10264101.142857144,
            "unit": "ns",
            "range": "± 137237.00594443688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25828118.8,
            "unit": "ns",
            "range": "± 585846.6969795533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64678173,
            "unit": "ns",
            "range": "± 891744.1918442755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137158995.86956522,
            "unit": "ns",
            "range": "± 3379907.1933055464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270028866,
            "unit": "ns",
            "range": "± 4588103.972374243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774123.1157894738,
            "unit": "ns",
            "range": "± 167234.80145164632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3466383.3936170214,
            "unit": "ns",
            "range": "± 299670.13259701803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2810360.131313131,
            "unit": "ns",
            "range": "± 202077.69048898036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7180648.924731183,
            "unit": "ns",
            "range": "± 419359.80088565114"
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
          "id": "79683e7ea42c28878db9410dae50381eb3443fc3",
          "message": "Changelog",
          "timestamp": "2023-05-11T14:22:53+09:00",
          "tree_id": "895f0a56b78b1b401ca20452e4807092a9c7f7be",
          "url": "https://github.com/greymistcube/libplanet/commit/79683e7ea42c28878db9410dae50381eb3443fc3"
        },
        "date": 1683783494930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4247908.333333333,
            "unit": "ns",
            "range": "± 62252.35093743927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4373392.428571428,
            "unit": "ns",
            "range": "± 73057.69768184204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5380067.214285715,
            "unit": "ns",
            "range": "± 68786.64836700459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5428773.736842105,
            "unit": "ns",
            "range": "± 68954.36866012037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8395811,
            "unit": "ns",
            "range": "± 163403.58250815677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347838.9583333333,
            "unit": "ns",
            "range": "± 8747.700485315961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330302,
            "unit": "ns",
            "range": "± 7159.975877054336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300676.09433962265,
            "unit": "ns",
            "range": "± 12562.379146397867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5292505.571428572,
            "unit": "ns",
            "range": "± 76864.86952859772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4848461.357142857,
            "unit": "ns",
            "range": "± 27480.660723237976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23139.542553191488,
            "unit": "ns",
            "range": "± 1667.1099947900545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106118.60655737705,
            "unit": "ns",
            "range": "± 4648.745595242831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91145.75757575757,
            "unit": "ns",
            "range": "± 4230.085974978636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115607.15463917526,
            "unit": "ns",
            "range": "± 16945.20444964949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6602.5204081632655,
            "unit": "ns",
            "range": "± 806.0763084492256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22589.63157894737,
            "unit": "ns",
            "range": "± 2187.231666472929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7095958.075,
            "unit": "ns",
            "range": "± 28934.00467088942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219704.6059895833,
            "unit": "ns",
            "range": "± 3287.536151314446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1624183.4963541667,
            "unit": "ns",
            "range": "± 3872.633234343523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3122082.699776786,
            "unit": "ns",
            "range": "± 2401.1172205530784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005575.2354266827,
            "unit": "ns",
            "range": "± 1877.2816862094446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904500.9301757812,
            "unit": "ns",
            "range": "± 326.8228160998282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9917694.3125,
            "unit": "ns",
            "range": "± 305873.3115339387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27334683.46153846,
            "unit": "ns",
            "range": "± 297403.8416949853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65272026.06666667,
            "unit": "ns",
            "range": "± 329351.8902443027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130650557.36666666,
            "unit": "ns",
            "range": "± 325088.0572053553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259479497.13333333,
            "unit": "ns",
            "range": "± 1529850.0461874346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740094.02247191,
            "unit": "ns",
            "range": "± 96412.5653553964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3317349.71875,
            "unit": "ns",
            "range": "± 101786.5954088177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764277.9014084507,
            "unit": "ns",
            "range": "± 131717.11946225134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6593304.125,
            "unit": "ns",
            "range": "± 128444.32508801884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57164.211764705884,
            "unit": "ns",
            "range": "± 3094.9915843185745"
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
          "id": "3e5ebae41403367a100bc0482c371392b73c7c38",
          "message": "Changelog",
          "timestamp": "2023-05-11T20:57:45+09:00",
          "tree_id": "153388e3a0fd97dc00b3a1a2c13be7066c042582",
          "url": "https://github.com/greymistcube/libplanet/commit/3e5ebae41403367a100bc0482c371392b73c7c38"
        },
        "date": 1683807097978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595919.65,
            "unit": "ns",
            "range": "± 81828.06587452615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895243,
            "unit": "ns",
            "range": "± 99721.07575197148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4575723.085714285,
            "unit": "ns",
            "range": "± 148079.61738743816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793863.705882353,
            "unit": "ns",
            "range": "± 97571.13542037208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7310283.837209302,
            "unit": "ns",
            "range": "± 268886.25802513334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292990.18,
            "unit": "ns",
            "range": "± 11805.828648128838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283600.03125,
            "unit": "ns",
            "range": "± 8786.131893168531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252966.23333333334,
            "unit": "ns",
            "range": "± 14016.187174922856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4437636.466666667,
            "unit": "ns",
            "range": "± 77323.29129040586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3997067.476190476,
            "unit": "ns",
            "range": "± 93993.11195381237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21528.57894736842,
            "unit": "ns",
            "range": "± 1808.1794745870857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91440.39393939394,
            "unit": "ns",
            "range": "± 8227.726623074233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75476.4512195122,
            "unit": "ns",
            "range": "± 3841.7000421220373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105569.22680412371,
            "unit": "ns",
            "range": "± 14819.040782684195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.306122448979,
            "unit": "ns",
            "range": "± 965.8727201389014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19431.852631578946,
            "unit": "ns",
            "range": "± 2213.718446648136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889507.149479167,
            "unit": "ns",
            "range": "± 50815.46121855935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903047.4281529018,
            "unit": "ns",
            "range": "± 6559.814070520996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363735.96953125,
            "unit": "ns",
            "range": "± 3850.304383375823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647167.977120536,
            "unit": "ns",
            "range": "± 3931.8690279120724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822428.9950520833,
            "unit": "ns",
            "range": "± 1886.0357369731973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757054.9423828125,
            "unit": "ns",
            "range": "± 623.9084817482109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8212972.785714285,
            "unit": "ns",
            "range": "± 299875.8220920653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22147857.8125,
            "unit": "ns",
            "range": "± 417258.7067632772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55917103.8,
            "unit": "ns",
            "range": "± 523022.818751616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111292105.6,
            "unit": "ns",
            "range": "± 966614.0461789287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222879071.57142857,
            "unit": "ns",
            "range": "± 1306535.5410895885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443949.1927710844,
            "unit": "ns",
            "range": "± 64204.07744050822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823280.4444444445,
            "unit": "ns",
            "range": "± 93530.88928124055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2399391.75,
            "unit": "ns",
            "range": "± 117208.74547019597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5567424.692307692,
            "unit": "ns",
            "range": "± 148945.73666050847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50600.5,
            "unit": "ns",
            "range": "± 3656.7915819313807"
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
          "id": "9a214d79183982ac100c7407d3eaf97566b99f5f",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:35:47+09:00",
          "tree_id": "872e4a36ff416633275d7c1777113ed0d3841682",
          "url": "https://github.com/greymistcube/libplanet/commit/9a214d79183982ac100c7407d3eaf97566b99f5f"
        },
        "date": 1683881282290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171015.4285714286,
            "unit": "ns",
            "range": "± 35860.92654797309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3363222,
            "unit": "ns",
            "range": "± 57400.14303118068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4246996.952380952,
            "unit": "ns",
            "range": "± 95546.51807338465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4238406.9375,
            "unit": "ns",
            "range": "± 72406.73221689518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6783485.344827586,
            "unit": "ns",
            "range": "± 192953.1761718511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270687.5,
            "unit": "ns",
            "range": "± 10055.496225887473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260833.0285714286,
            "unit": "ns",
            "range": "± 8575.978062848213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230876.75,
            "unit": "ns",
            "range": "± 5998.35181451878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173869.785714286,
            "unit": "ns",
            "range": "± 34181.14282236416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859646.214285714,
            "unit": "ns",
            "range": "± 26435.658342993327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15937.425531914894,
            "unit": "ns",
            "range": "± 1247.5891977020449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81790,
            "unit": "ns",
            "range": "± 3604.614871938471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67987.40909090909,
            "unit": "ns",
            "range": "± 1675.8790347041875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83296.94897959183,
            "unit": "ns",
            "range": "± 11728.463936805949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4249.895833333333,
            "unit": "ns",
            "range": "± 455.8463609864199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14805.13829787234,
            "unit": "ns",
            "range": "± 1509.2408516900061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5912914.9453125,
            "unit": "ns",
            "range": "± 22368.58511410262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017289.9447916667,
            "unit": "ns",
            "range": "± 3231.857228908328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350527.8915364584,
            "unit": "ns",
            "range": "± 1051.390227003499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558561.409895833,
            "unit": "ns",
            "range": "± 12977.286354907947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817072.5279017857,
            "unit": "ns",
            "range": "± 674.2273272333816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725849.4199969952,
            "unit": "ns",
            "range": "± 311.97098927121675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591059.733333333,
            "unit": "ns",
            "range": "± 52494.47740812724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19467270.85714286,
            "unit": "ns",
            "range": "± 98402.62807064044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49226414.86666667,
            "unit": "ns",
            "range": "± 681625.4106560148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99931146.73333333,
            "unit": "ns",
            "range": "± 623342.1193093457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196070442.6,
            "unit": "ns",
            "range": "± 1898977.5458361346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333514.7472527472,
            "unit": "ns",
            "range": "± 75861.93944009859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2496045.3103448274,
            "unit": "ns",
            "range": "± 72567.61029949118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2156420.0821917807,
            "unit": "ns",
            "range": "± 97331.96462518728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376938.65,
            "unit": "ns",
            "range": "± 189672.97954415227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44980.744680851065,
            "unit": "ns",
            "range": "± 2750.565059976758"
          }
        ]
      }
    ]
  }
}