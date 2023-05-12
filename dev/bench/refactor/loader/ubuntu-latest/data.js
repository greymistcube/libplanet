window.BENCHMARK_DATA = {
  "lastUpdate": 1683884308199,
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
          "id": "b003710d0bc5b2f0a2aee3875c2c7490a04c25c5",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:34:50+09:00",
          "tree_id": "f5254e30a552a57037b7e700e8600789629f6456",
          "url": "https://github.com/greymistcube/libplanet/commit/b003710d0bc5b2f0a2aee3875c2c7490a04c25c5"
        },
        "date": 1683881499282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3524649.762886598,
            "unit": "ns",
            "range": "± 286074.3766518513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3766612.505154639,
            "unit": "ns",
            "range": "± 303309.46264531557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4859088.104166667,
            "unit": "ns",
            "range": "± 351619.5129500811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4710244.151515151,
            "unit": "ns",
            "range": "± 409864.9019437932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8345070.68,
            "unit": "ns",
            "range": "± 619262.4625656446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354202.95,
            "unit": "ns",
            "range": "± 58225.747553892295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329810.0101010101,
            "unit": "ns",
            "range": "± 52022.59607965797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287580.6947368421,
            "unit": "ns",
            "range": "± 40655.06271764976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4815166.357142857,
            "unit": "ns",
            "range": "± 355630.10529453063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4432081.62886598,
            "unit": "ns",
            "range": "± 378130.5246137546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24744.58585858586,
            "unit": "ns",
            "range": "± 9811.064043908566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105514.69696969698,
            "unit": "ns",
            "range": "± 23044.235958860598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101546.48979591837,
            "unit": "ns",
            "range": "± 24779.515161397238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117402.19387755102,
            "unit": "ns",
            "range": "± 31787.656520497338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4819.146067415731,
            "unit": "ns",
            "range": "± 816.7227963936919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25470.19,
            "unit": "ns",
            "range": "± 10433.576894915812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6722225.655208333,
            "unit": "ns",
            "range": "± 101894.58088488806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2114888.8588541667,
            "unit": "ns",
            "range": "± 29598.040045917533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1567080.9276041666,
            "unit": "ns",
            "range": "± 21095.723286419226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2985904.6979166665,
            "unit": "ns",
            "range": "± 41871.53270590191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985177.571484375,
            "unit": "ns",
            "range": "± 16948.781321712282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916892.7622445914,
            "unit": "ns",
            "range": "± 12041.500831124851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8524953,
            "unit": "ns",
            "range": "± 230521.60247744512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22606970.206185568,
            "unit": "ns",
            "range": "± 1372574.3425835806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58999258.04081633,
            "unit": "ns",
            "range": "± 3752021.847415257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117231761.40243903,
            "unit": "ns",
            "range": "± 6207408.819664289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233248519.14285713,
            "unit": "ns",
            "range": "± 8475575.03265252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550027.6907216494,
            "unit": "ns",
            "range": "± 210162.9073427009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3115134.474747475,
            "unit": "ns",
            "range": "± 335133.2998992096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510534.536082474,
            "unit": "ns",
            "range": "± 299653.05089278746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6475597.142857143,
            "unit": "ns",
            "range": "± 578830.2303750211"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68514.5306122449,
            "unit": "ns",
            "range": "± 20122.167632514444"
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
          "id": "8a9bbff0287122d587caf7f3f45e79c272a900c3",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:33:30+09:00",
          "tree_id": "793f87d9639df2f454bc44f46fb33421b935b592",
          "url": "https://github.com/greymistcube/libplanet/commit/8a9bbff0287122d587caf7f3f45e79c272a900c3"
        },
        "date": 1683881557347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3798335.747368421,
            "unit": "ns",
            "range": "± 313815.5132857306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3893454.6907216497,
            "unit": "ns",
            "range": "± 373612.1814872387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5232714.59375,
            "unit": "ns",
            "range": "± 415910.3630746355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4760964.806122449,
            "unit": "ns",
            "range": "± 398011.53160434205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8730296.44329897,
            "unit": "ns",
            "range": "± 706980.7682766196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353297.329787234,
            "unit": "ns",
            "range": "± 62577.217529111746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333522.8404255319,
            "unit": "ns",
            "range": "± 56152.910647624216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303134.3229166667,
            "unit": "ns",
            "range": "± 42049.13027362529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4973442.516129033,
            "unit": "ns",
            "range": "± 397065.2800314429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4592531.81443299,
            "unit": "ns",
            "range": "± 428881.8578680383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22792.121212121212,
            "unit": "ns",
            "range": "± 9050.046270343693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103538.15463917526,
            "unit": "ns",
            "range": "± 21898.877804838634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96604.42045454546,
            "unit": "ns",
            "range": "± 16018.915536300108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112529.01111111112,
            "unit": "ns",
            "range": "± 24600.12514926348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5276.419354838709,
            "unit": "ns",
            "range": "± 911.3361824526693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23100.252525252527,
            "unit": "ns",
            "range": "± 9400.830194932129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7078207.2258522725,
            "unit": "ns",
            "range": "± 169010.37690020338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2237892.2052283655,
            "unit": "ns",
            "range": "± 23446.418366582977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1639285.0157137783,
            "unit": "ns",
            "range": "± 38948.92000545606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3233085.12734375,
            "unit": "ns",
            "range": "± 59621.371953679576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065163.193564967,
            "unit": "ns",
            "range": "± 23123.536281992714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 995135.2672851563,
            "unit": "ns",
            "range": "± 26221.18967122881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8854063.454545455,
            "unit": "ns",
            "range": "± 590032.8447470283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25023846.663265307,
            "unit": "ns",
            "range": "± 2031686.6402881928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65507688.13265306,
            "unit": "ns",
            "range": "± 3973645.986823108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127345560.73863636,
            "unit": "ns",
            "range": "± 6989399.769356785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258747850.91935483,
            "unit": "ns",
            "range": "± 11722610.704040691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659937.6354166667,
            "unit": "ns",
            "range": "± 193096.50975630205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3207014.357894737,
            "unit": "ns",
            "range": "± 287210.4773308879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557201.6363636362,
            "unit": "ns",
            "range": "± 288640.33300000924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6901729.41,
            "unit": "ns",
            "range": "± 686122.7724620809"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59475.583333333336,
            "unit": "ns",
            "range": "± 14210.6305743024"
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
          "id": "06038597e939a054280cda2f978f015d512871b3",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:19:00+09:00",
          "tree_id": "b8546126da778de818316db9781d517fc6723861",
          "url": "https://github.com/greymistcube/libplanet/commit/06038597e939a054280cda2f978f015d512871b3"
        },
        "date": 1683883865161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212083.7,
            "unit": "ns",
            "range": "± 72858.523470671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337414.4375,
            "unit": "ns",
            "range": "± 61520.459357809035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198085.928571428,
            "unit": "ns",
            "range": "± 44555.70915065299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4132997.5,
            "unit": "ns",
            "range": "± 96109.21002482144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6695218.068965517,
            "unit": "ns",
            "range": "± 152099.22123448868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270656.5111111111,
            "unit": "ns",
            "range": "± 10241.778491289806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260398.60869565216,
            "unit": "ns",
            "range": "± 9870.540017824671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230811.95652173914,
            "unit": "ns",
            "range": "± 5589.033665689046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213359,
            "unit": "ns",
            "range": "± 32418.66592170099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3791920.933333333,
            "unit": "ns",
            "range": "± 33687.93306738158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15355.577319587628,
            "unit": "ns",
            "range": "± 1136.262108801005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84373.04166666667,
            "unit": "ns",
            "range": "± 4183.067670870806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69758.48,
            "unit": "ns",
            "range": "± 1815.6412806498975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81196.38541666667,
            "unit": "ns",
            "range": "± 9850.594163612983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4209.122448979592,
            "unit": "ns",
            "range": "± 458.43132944940055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14608.604395604396,
            "unit": "ns",
            "range": "± 1069.8778733951194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5866921.761979166,
            "unit": "ns",
            "range": "± 19829.165617543247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837640.2540564905,
            "unit": "ns",
            "range": "± 1507.0745119148596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350349.4340122768,
            "unit": "ns",
            "range": "± 1492.6942263392702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540205.365234375,
            "unit": "ns",
            "range": "± 1401.8473612570076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819017.3005022322,
            "unit": "ns",
            "range": "± 676.164508354567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725161.5594308035,
            "unit": "ns",
            "range": "± 459.4191747448914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7585268.733333333,
            "unit": "ns",
            "range": "± 55803.368896595515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19198210.533333335,
            "unit": "ns",
            "range": "± 54028.64105779805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49571638.6,
            "unit": "ns",
            "range": "± 223897.4980284505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100127883.13333334,
            "unit": "ns",
            "range": "± 648058.6256794614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196788352.06666666,
            "unit": "ns",
            "range": "± 958436.2619550412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301758.1595744682,
            "unit": "ns",
            "range": "± 75928.15355679444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555660.1578947366,
            "unit": "ns",
            "range": "± 56015.631608272386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110754.6041666665,
            "unit": "ns",
            "range": "± 152056.18851190497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5151654.542857143,
            "unit": "ns",
            "range": "± 152293.18661642377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44008.96103896104,
            "unit": "ns",
            "range": "± 2276.1198137085853"
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
          "id": "38460f58fec90972abc9cde7a3a7b891e23d966e",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:25:28+09:00",
          "tree_id": "03152d618a43c66948349a07c8fd0dc1eb3ff367",
          "url": "https://github.com/greymistcube/libplanet/commit/38460f58fec90972abc9cde7a3a7b891e23d966e"
        },
        "date": 1683884301005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236376.375,
            "unit": "ns",
            "range": "± 146071.7477866423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470636.0789473685,
            "unit": "ns",
            "range": "± 117093.79562379977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4183553.8636363638,
            "unit": "ns",
            "range": "± 100785.79148031658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4346207.857142857,
            "unit": "ns",
            "range": "± 122993.22860515362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6904563.461538462,
            "unit": "ns",
            "range": "± 283876.56885754387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280361.2083333333,
            "unit": "ns",
            "range": "± 10250.358125468329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268435.1891891892,
            "unit": "ns",
            "range": "± 8163.565070338917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230706.2857142857,
            "unit": "ns",
            "range": "± 2994.9188104719437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207486.85,
            "unit": "ns",
            "range": "± 94273.08808164715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832704.782608696,
            "unit": "ns",
            "range": "± 94503.32571635029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17518,
            "unit": "ns",
            "range": "± 1342.032111203007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82106.40860215054,
            "unit": "ns",
            "range": "± 4796.180548412318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72459,
            "unit": "ns",
            "range": "± 1142.5382000010059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83915.93670886075,
            "unit": "ns",
            "range": "± 4235.37341417275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5014.577319587629,
            "unit": "ns",
            "range": "± 646.6484238468179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17437.315789473683,
            "unit": "ns",
            "range": "± 1300.0906700226546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5779606.891666667,
            "unit": "ns",
            "range": "± 32367.89011728848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820095.6096754808,
            "unit": "ns",
            "range": "± 3611.5537137667798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327957.765234375,
            "unit": "ns",
            "range": "± 5815.075319439646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613285.6588541665,
            "unit": "ns",
            "range": "± 8162.546540621747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817903.4402043269,
            "unit": "ns",
            "range": "± 1711.6998277748858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752936.1916852678,
            "unit": "ns",
            "range": "± 959.2819090082239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7648594.857142857,
            "unit": "ns",
            "range": "± 76435.12576523474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21380402.29411765,
            "unit": "ns",
            "range": "± 412130.22228595486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52247716.25,
            "unit": "ns",
            "range": "± 1183413.6473155185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102904119.5,
            "unit": "ns",
            "range": "± 1073923.6102061055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208836345.06666666,
            "unit": "ns",
            "range": "± 3117802.713527806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378450.5,
            "unit": "ns",
            "range": "± 88683.32759371819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2608418.314285714,
            "unit": "ns",
            "range": "± 82713.82438076743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202327.2933333335,
            "unit": "ns",
            "range": "± 111197.13064118027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5461700.081081081,
            "unit": "ns",
            "range": "± 185211.90470788052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47849.95121951219,
            "unit": "ns",
            "range": "± 2529.9595610023366"
          }
        ]
      }
    ]
  }
}