window.BENCHMARK_DATA = {
  "lastUpdate": 1704333934658,
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
          "id": "e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:45:57+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f"
        },
        "date": 1704333655505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689538.285714285,
            "unit": "ns",
            "range": "± 55164.17686454551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19207258.4375,
            "unit": "ns",
            "range": "± 371265.373480474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47528916.916666664,
            "unit": "ns",
            "range": "± 401746.6083994325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95179590.84615384,
            "unit": "ns",
            "range": "± 921034.0006445515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199806600.73134327,
            "unit": "ns",
            "range": "± 9358827.166070467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51769.13829787234,
            "unit": "ns",
            "range": "± 16110.223907724318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230242.83516483515,
            "unit": "ns",
            "range": "± 20341.49580169328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262870.1382978723,
            "unit": "ns",
            "range": "± 47627.928312841206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245069.8510638298,
            "unit": "ns",
            "range": "± 45859.634596527714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3921569.1,
            "unit": "ns",
            "range": "± 149148.29043524133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3667826.2934782607,
            "unit": "ns",
            "range": "± 214759.15355581895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13630.765957446809,
            "unit": "ns",
            "range": "± 1556.2666412326614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65927.5,
            "unit": "ns",
            "range": "± 10258.790343295466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93776.38775510204,
            "unit": "ns",
            "range": "± 12963.509860160853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92604.6888888889,
            "unit": "ns",
            "range": "± 23528.863741931775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3799.2978723404253,
            "unit": "ns",
            "range": "± 1316.084538496119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12355.303370786516,
            "unit": "ns",
            "range": "± 1070.5875766106453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158124.1397849463,
            "unit": "ns",
            "range": "± 88655.4945198341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2533761.06626506,
            "unit": "ns",
            "range": "± 210049.75627468238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714308.6923076923,
            "unit": "ns",
            "range": "± 128279.1322363239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7884083.2,
            "unit": "ns",
            "range": "± 872656.2247446103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3050303.7083333335,
            "unit": "ns",
            "range": "± 241959.4017485672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3135425.9789473685,
            "unit": "ns",
            "range": "± 240750.60708670408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3638770.435483871,
            "unit": "ns",
            "range": "± 162074.72766393912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3491253.05,
            "unit": "ns",
            "range": "± 158140.51530917254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13154800.967391305,
            "unit": "ns",
            "range": "± 2234826.616178365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4441204.067708333,
            "unit": "ns",
            "range": "± 145699.68218432993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410915.9325597426,
            "unit": "ns",
            "range": "± 28284.268968911678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 909419.1874348958,
            "unit": "ns",
            "range": "± 12433.85507695082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016390.65234375,
            "unit": "ns",
            "range": "± 31249.728205947828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658694.4111328125,
            "unit": "ns",
            "range": "± 9965.982661716555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573154.6858072917,
            "unit": "ns",
            "range": "± 9431.954328489523"
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
          "id": "6af45500afe3dfcb336b82e35ad2b48e86f3ae41",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:44:24+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/6af45500afe3dfcb336b82e35ad2b48e86f3ae41"
        },
        "date": 1704333912294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8971900.765306123,
            "unit": "ns",
            "range": "± 932390.0053292768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22359531.969387755,
            "unit": "ns",
            "range": "± 2369071.4427602016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57135711.05555555,
            "unit": "ns",
            "range": "± 6701683.173334703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97855328.84848484,
            "unit": "ns",
            "range": "± 4596757.851054774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203075676.56842107,
            "unit": "ns",
            "range": "± 11580813.402954282"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44387.87234042553,
            "unit": "ns",
            "range": "± 10745.881415570633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252977.25510204083,
            "unit": "ns",
            "range": "± 35375.10069376547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256520.18,
            "unit": "ns",
            "range": "± 35003.542880535606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263015.4845360825,
            "unit": "ns",
            "range": "± 29033.18089779398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4707533.86,
            "unit": "ns",
            "range": "± 393011.15062050195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4125713.4494949495,
            "unit": "ns",
            "range": "± 360920.6547125421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19906.0625,
            "unit": "ns",
            "range": "± 3376.0458334769155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97512.44736842105,
            "unit": "ns",
            "range": "± 21622.699991507357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99484.20430107527,
            "unit": "ns",
            "range": "± 9133.66637484301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94044.40697674418,
            "unit": "ns",
            "range": "± 11872.480834590364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7535.105263157895,
            "unit": "ns",
            "range": "± 1410.631807093818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20736.68085106383,
            "unit": "ns",
            "range": "± 4555.60126034811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264365.45,
            "unit": "ns",
            "range": "± 115071.06122242924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100460.24025974,
            "unit": "ns",
            "range": "± 158823.28316347822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154927.815217391,
            "unit": "ns",
            "range": "± 188747.1785337148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8943317.741573034,
            "unit": "ns",
            "range": "± 540300.2441574527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2910530.0890410957,
            "unit": "ns",
            "range": "± 136116.64347045188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3068309.475,
            "unit": "ns",
            "range": "± 153129.90628361836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3615931,
            "unit": "ns",
            "range": "± 172056.66905472128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3403607.552238806,
            "unit": "ns",
            "range": "± 146759.87077724634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13370913.07368421,
            "unit": "ns",
            "range": "± 1935873.4851504248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5894138.460618623,
            "unit": "ns",
            "range": "± 807543.7072699406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877107.0443522136,
            "unit": "ns",
            "range": "± 187213.44265390455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1103031.422170928,
            "unit": "ns",
            "range": "± 106028.58824900271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2510766.062380421,
            "unit": "ns",
            "range": "± 144985.414829781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797503.101430532,
            "unit": "ns",
            "range": "± 27003.805060584094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747692.2605850395,
            "unit": "ns",
            "range": "± 40574.71879306675"
          }
        ]
      }
    ]
  }
}