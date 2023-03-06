window.BENCHMARK_DATA = {
  "lastUpdate": 1678122503301,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700710467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120177.55102040817,
            "unit": "ns",
            "range": "± 9291.005856039363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4858026.328125,
            "unit": "ns",
            "range": "± 33729.37647670018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524305.2036830357,
            "unit": "ns",
            "range": "± 3324.7481883278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169025.4356971155,
            "unit": "ns",
            "range": "± 2251.0087770452283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625025.8984375,
            "unit": "ns",
            "range": "± 8402.814955531112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836736.181640625,
            "unit": "ns",
            "range": "± 3481.261179031147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769542.5065104166,
            "unit": "ns",
            "range": "± 1586.6227915499403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4929136.71875,
            "unit": "ns",
            "range": "± 49286.003100068265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6218821.428571428,
            "unit": "ns",
            "range": "± 99637.97683901168"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26594285.714285713,
            "unit": "ns",
            "range": "± 433581.5740073387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6672693.333333333,
            "unit": "ns",
            "range": "± 122727.7501898681"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29396987.5,
            "unit": "ns",
            "range": "± 569357.1554832696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109045.91836734694,
            "unit": "ns",
            "range": "± 14495.923126597922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221801.2048192771,
            "unit": "ns",
            "range": "± 11401.214034370967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200761.61616161617,
            "unit": "ns",
            "range": "± 12401.750263824328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3732020,
            "unit": "ns",
            "range": "± 54981.687860595914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9354000,
            "unit": "ns",
            "range": "± 88787.18722532332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26463.26530612245,
            "unit": "ns",
            "range": "± 3417.6735245835866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61082.97872340425,
            "unit": "ns",
            "range": "± 5607.591595767187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45253.15789473684,
            "unit": "ns",
            "range": "± 4089.619777144636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105212.19512195123,
            "unit": "ns",
            "range": "± 10798.495439825241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6703.125,
            "unit": "ns",
            "range": "± 803.6696264143947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29854.255319148935,
            "unit": "ns",
            "range": "± 4463.222831277649"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/greymistcube/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678122478061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597750,
            "unit": "ns",
            "range": "± 162439.82707253427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917516.326530612,
            "unit": "ns",
            "range": "± 226480.26731544128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359020.212765957,
            "unit": "ns",
            "range": "± 203737.92349185128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5927201.020408163,
            "unit": "ns",
            "range": "± 450744.80390390597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52639.784946236556,
            "unit": "ns",
            "range": "± 4682.510005675287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8278037,
            "unit": "ns",
            "range": "± 572883.190564458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21736616,
            "unit": "ns",
            "range": "± 862681.8074836546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57224882.666666664,
            "unit": "ns",
            "range": "± 2886910.029977031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112958585,
            "unit": "ns",
            "range": "± 4835178.47257323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223269709.0909091,
            "unit": "ns",
            "range": "± 7007913.573389891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5498929.329427083,
            "unit": "ns",
            "range": "± 139175.03830578277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1701659.9609375,
            "unit": "ns",
            "range": "± 26302.452779998384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342353.9866727942,
            "unit": "ns",
            "range": "± 27226.071855067123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032483.828125,
            "unit": "ns",
            "range": "± 46059.28849255143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945801.1328125,
            "unit": "ns",
            "range": "± 20417.29353530438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880663.1315104166,
            "unit": "ns",
            "range": "± 13105.16718149726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3390600,
            "unit": "ns",
            "range": "± 204800.16328538518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5286517.021276596,
            "unit": "ns",
            "range": "± 325843.99844107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27055362.5,
            "unit": "ns",
            "range": "± 1619730.8385394746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7275527.450980392,
            "unit": "ns",
            "range": "± 296780.5317593668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30514905.555555556,
            "unit": "ns",
            "range": "± 623003.0926863301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203250,
            "unit": "ns",
            "range": "± 20687.748726442445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207432.63157894736,
            "unit": "ns",
            "range": "± 17562.953285467192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183432.32323232322,
            "unit": "ns",
            "range": "± 16797.089326833928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12278472.222222222,
            "unit": "ns",
            "range": "± 787334.1657425823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9906628.421052631,
            "unit": "ns",
            "range": "± 588903.4571500027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23246.938775510203,
            "unit": "ns",
            "range": "± 3147.44878135681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58339.784946236556,
            "unit": "ns",
            "range": "± 6646.740616483721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46640.625,
            "unit": "ns",
            "range": "± 5864.712998317273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107973.68421052632,
            "unit": "ns",
            "range": "± 16622.333160132788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6792.553191489362,
            "unit": "ns",
            "range": "± 1068.0340055097442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22218.556701030928,
            "unit": "ns",
            "range": "± 2816.592574108357"
          }
        ]
      }
    ]
  }
}