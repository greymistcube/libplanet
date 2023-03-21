window.BENCHMARK_DATA = {
  "lastUpdate": 1679365228086,
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
          "id": "84cb01bc9136fbaec92c2bc40f6a892c4711ccb7",
          "message": "Removed ByteArray and ToByteArray() from BlockCommit",
          "timestamp": "2023-03-20T18:52:26+09:00",
          "tree_id": "a833bf978224ee20531425ec6bad0b69d2c24aa3",
          "url": "https://github.com/greymistcube/libplanet/commit/84cb01bc9136fbaec92c2bc40f6a892c4711ccb7"
        },
        "date": 1679310055074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765296.8085106383,
            "unit": "ns",
            "range": "± 223163.74597274212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151803.125,
            "unit": "ns",
            "range": "± 197758.21678484324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628317.204301075,
            "unit": "ns",
            "range": "± 269423.8000782798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6317922.916666667,
            "unit": "ns",
            "range": "± 465232.35631674965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56547.31182795699,
            "unit": "ns",
            "range": "± 7161.181457629578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8391162.5,
            "unit": "ns",
            "range": "± 213340.64985472127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21864703.092783507,
            "unit": "ns",
            "range": "± 1864860.797500134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58611492.85714286,
            "unit": "ns",
            "range": "± 4701099.993744609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111507695.87628865,
            "unit": "ns",
            "range": "± 7690908.995581482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244570943.0379747,
            "unit": "ns",
            "range": "± 12551994.248935243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726215.983072917,
            "unit": "ns",
            "range": "± 138999.52716984024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790874.6707589286,
            "unit": "ns",
            "range": "± 58561.2131991391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370331.3040226065,
            "unit": "ns",
            "range": "± 52990.80986368703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3047300.673204787,
            "unit": "ns",
            "range": "± 107458.80343061475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992317.7490234375,
            "unit": "ns",
            "range": "± 25241.217664665088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896913.5850694445,
            "unit": "ns",
            "range": "± 25099.88841977416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3607161.4583333335,
            "unit": "ns",
            "range": "± 297323.44265384646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6092996.666666667,
            "unit": "ns",
            "range": "± 337606.099993482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29316670.967741936,
            "unit": "ns",
            "range": "± 2601312.7526049917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6862826.804123712,
            "unit": "ns",
            "range": "± 436401.35662681155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31954045.91836735,
            "unit": "ns",
            "range": "± 2785894.464559557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195351.08695652173,
            "unit": "ns",
            "range": "± 17831.300388104537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202822.1052631579,
            "unit": "ns",
            "range": "± 15923.141054849433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188003.0612244898,
            "unit": "ns",
            "range": "± 22721.806838282315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13156102.150537634,
            "unit": "ns",
            "range": "± 934403.6418298519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10738043.877551021,
            "unit": "ns",
            "range": "± 844436.5593069074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24078,
            "unit": "ns",
            "range": "± 6618.348843491209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57081.25,
            "unit": "ns",
            "range": "± 8879.79744316158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46638.29787234042,
            "unit": "ns",
            "range": "± 7113.762315112123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103147.19101123596,
            "unit": "ns",
            "range": "± 13632.890458270065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10779,
            "unit": "ns",
            "range": "± 5700.191295744451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21018.367346938776,
            "unit": "ns",
            "range": "± 5527.538311146367"
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
          "id": "89b597462852c69c5dfd8135de638136dd06269e",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:03:16+09:00",
          "tree_id": "f6a36b5cf4aac2e0d4ba99b006852e010686dc9f",
          "url": "https://github.com/greymistcube/libplanet/commit/89b597462852c69c5dfd8135de638136dd06269e"
        },
        "date": 1679365195402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336377.7777777778,
            "unit": "ns",
            "range": "± 27568.066683276775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2365212,
            "unit": "ns",
            "range": "± 62168.56333120998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2383476.6666666665,
            "unit": "ns",
            "range": "± 44374.21173008786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4876446,
            "unit": "ns",
            "range": "± 189860.6429968667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43411.475409836065,
            "unit": "ns",
            "range": "± 1935.811488812529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7259913.333333333,
            "unit": "ns",
            "range": "± 42706.688446837434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17848200,
            "unit": "ns",
            "range": "± 100372.97587356014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45987020,
            "unit": "ns",
            "range": "± 229328.83501956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90863106.66666667,
            "unit": "ns",
            "range": "± 664184.1208437254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185088426.66666666,
            "unit": "ns",
            "range": "± 690207.338896557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4881103.850446428,
            "unit": "ns",
            "range": "± 8684.44613933782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513858.8416466345,
            "unit": "ns",
            "range": "± 1188.422009503382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147259.458705357,
            "unit": "ns",
            "range": "± 1305.7654111891177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621909.1145833335,
            "unit": "ns",
            "range": "± 54512.67066621254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818748.33984375,
            "unit": "ns",
            "range": "± 1161.054629743911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771013.0333533654,
            "unit": "ns",
            "range": "± 387.4961188652852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019730,
            "unit": "ns",
            "range": "± 50321.81009690104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4710171.794871795,
            "unit": "ns",
            "range": "± 163238.9626295691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21378773.333333332,
            "unit": "ns",
            "range": "± 151041.1224358011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5722171.428571428,
            "unit": "ns",
            "range": "± 88230.70657326496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24945126.666666668,
            "unit": "ns",
            "range": "± 329671.4478443796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180514.63414634147,
            "unit": "ns",
            "range": "± 6466.473574352939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179095.74468085106,
            "unit": "ns",
            "range": "± 6289.949106271208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157456.0606060606,
            "unit": "ns",
            "range": "± 9844.596758792522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10514842.857142856,
            "unit": "ns",
            "range": "± 38245.054266194675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8506713.333333334,
            "unit": "ns",
            "range": "± 58368.556440538945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18291.57894736842,
            "unit": "ns",
            "range": "± 1836.1420678065992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51294.68085106383,
            "unit": "ns",
            "range": "± 4301.271805450168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35783.333333333336,
            "unit": "ns",
            "range": "± 1071.9248987246017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88764.64646464646,
            "unit": "ns",
            "range": "± 13933.151724056337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4494.791666666667,
            "unit": "ns",
            "range": "± 566.4979754071068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17067.74193548387,
            "unit": "ns",
            "range": "± 1335.2382371959416"
          }
        ]
      }
    ]
  }
}