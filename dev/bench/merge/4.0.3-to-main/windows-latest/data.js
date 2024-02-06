window.BENCHMARK_DATA = {
  "lastUpdate": 1707241029089,
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
          "id": "94b7570a20c8644514310375f106cb11e0f810b6",
          "message": "Merge 4.0.3 to main",
          "timestamp": "2024-02-06T22:58:51+09:00",
          "tree_id": "36cb7e1ba8c8877a0e4aa31a7d106fe92dffd071",
          "url": "https://github.com/greymistcube/libplanet/commit/94b7570a20c8644514310375f106cb11e0f810b6"
        },
        "date": 1707228801701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028210.8247422681,
            "unit": "ns",
            "range": "± 122637.34864488081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1828200,
            "unit": "ns",
            "range": "± 73800.08379684303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619037.1134020619,
            "unit": "ns",
            "range": "± 167964.63499274908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11299917.045454545,
            "unit": "ns",
            "range": "± 1116767.4538720904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36026.13636363636,
            "unit": "ns",
            "range": "± 2861.415706125237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5262229.411764706,
            "unit": "ns",
            "range": "± 103606.6585981922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13802680,
            "unit": "ns",
            "range": "± 203054.65555573243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34555768.75,
            "unit": "ns",
            "range": "± 492343.5287395039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68599750,
            "unit": "ns",
            "range": "± 953415.5359709476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138021993.33333334,
            "unit": "ns",
            "range": "± 1430154.3430526585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3370438.0301339286,
            "unit": "ns",
            "range": "± 9150.693715101772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099653.203125,
            "unit": "ns",
            "range": "± 4319.980178969188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743702.6088169643,
            "unit": "ns",
            "range": "± 889.9308663857147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943854.8828125,
            "unit": "ns",
            "range": "± 3046.318584009756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625823.486328125,
            "unit": "ns",
            "range": "± 636.9811842453944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573038.5366586539,
            "unit": "ns",
            "range": "± 620.0700243230857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2304798.484848485,
            "unit": "ns",
            "range": "± 108342.81985001873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2314910.3448275863,
            "unit": "ns",
            "range": "± 67402.61411223278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2933837.5,
            "unit": "ns",
            "range": "± 73474.95173600793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940948.75,
            "unit": "ns",
            "range": "± 153680.35872109866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12559713.333333334,
            "unit": "ns",
            "range": "± 1422392.007804167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181678.125,
            "unit": "ns",
            "range": "± 8412.64106936132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175071.18644067796,
            "unit": "ns",
            "range": "± 7660.5584303391715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148510.1265822785,
            "unit": "ns",
            "range": "± 7708.862614178847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2921273.3333333335,
            "unit": "ns",
            "range": "± 53334.82468152983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2572294.4444444445,
            "unit": "ns",
            "range": "± 45661.73867785771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13843.010752688173,
            "unit": "ns",
            "range": "± 1867.7117975155522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61545.65217391304,
            "unit": "ns",
            "range": "± 7065.788385174096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50620.61855670103,
            "unit": "ns",
            "range": "± 6097.385678584065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71302.0202020202,
            "unit": "ns",
            "range": "± 16827.073543560808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3562.3655913978496,
            "unit": "ns",
            "range": "± 1129.0544310919631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12709.677419354839,
            "unit": "ns",
            "range": "± 1944.2817225262875"
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
          "id": "a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d",
          "message": "Merge tag '4.0.3' into merge/4.0.3-to-main\n\nLibplanet 4.0.3",
          "timestamp": "2024-02-07T02:23:56+09:00",
          "tree_id": "982be82ca572f1d131b6b0bab59e583faeb5460d",
          "url": "https://github.com/greymistcube/libplanet/commit/a6715fa1d331991a1ea4c0f27681e3d1c2a56d1d"
        },
        "date": 1707241008599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070298.4848484849,
            "unit": "ns",
            "range": "± 136068.28520076533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1848955,
            "unit": "ns",
            "range": "± 80522.5758952951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636051.0204081633,
            "unit": "ns",
            "range": "± 181098.95013835965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10977956.451612903,
            "unit": "ns",
            "range": "± 919354.5280351827"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37742.857142857145,
            "unit": "ns",
            "range": "± 3745.5497403108743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5283161.538461538,
            "unit": "ns",
            "range": "± 42466.2716843524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14126100,
            "unit": "ns",
            "range": "± 241019.82767675637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35003300,
            "unit": "ns",
            "range": "± 393631.5047585261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70202707.6923077,
            "unit": "ns",
            "range": "± 531374.6127757366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 141587361.53846154,
            "unit": "ns",
            "range": "± 1166850.2207070547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3455621.065848214,
            "unit": "ns",
            "range": "± 12754.49493618741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113385.625,
            "unit": "ns",
            "range": "± 4485.859214326258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754681.9010416666,
            "unit": "ns",
            "range": "± 1350.1328905823314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2006949.135044643,
            "unit": "ns",
            "range": "± 6982.786508228213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629112.2349330357,
            "unit": "ns",
            "range": "± 1180.0431992063538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568245.361328125,
            "unit": "ns",
            "range": "± 613.3625714869384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2289033.3333333335,
            "unit": "ns",
            "range": "± 87397.43005456077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2376851.282051282,
            "unit": "ns",
            "range": "± 81497.0256861041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3014764.285714286,
            "unit": "ns",
            "range": "± 42045.48100007267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2951650.5376344086,
            "unit": "ns",
            "range": "± 166069.6315612271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12553356.52173913,
            "unit": "ns",
            "range": "± 1538032.957555991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194498.93617021278,
            "unit": "ns",
            "range": "± 14513.786509939335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177714.2857142857,
            "unit": "ns",
            "range": "± 10575.827484605023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148612.16216216216,
            "unit": "ns",
            "range": "± 7464.637228937824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2933850,
            "unit": "ns",
            "range": "± 35977.53038088763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2556840,
            "unit": "ns",
            "range": "± 35494.74407772026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13073.91304347826,
            "unit": "ns",
            "range": "± 1672.194686416192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65330.208333333336,
            "unit": "ns",
            "range": "± 8982.006806495408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58704.0404040404,
            "unit": "ns",
            "range": "± 9465.845361430436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71437.11340206186,
            "unit": "ns",
            "range": "± 15298.892386294594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3369.4736842105262,
            "unit": "ns",
            "range": "± 679.8112510587547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12374.418604651162,
            "unit": "ns",
            "range": "± 1467.3053370448783"
          }
        ]
      }
    ]
  }
}