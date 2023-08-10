window.BENCHMARK_DATA = {
  "lastUpdate": 1691652382126,
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
          "id": "04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:03:27+09:00",
          "tree_id": "4b1c486d0920781a82c56ed2b2866158aa607126",
          "url": "https://github.com/greymistcube/libplanet/commit/04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9"
        },
        "date": 1691651998853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8356780.423076923,
            "unit": "ns",
            "range": "± 224093.84722743696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20943110.346153848,
            "unit": "ns",
            "range": "± 334705.74450598797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52517919.93333333,
            "unit": "ns",
            "range": "± 583533.5843785156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106433113.93333334,
            "unit": "ns",
            "range": "± 622445.5155292673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212463484.7142857,
            "unit": "ns",
            "range": "± 871166.1800296488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73706.98958333333,
            "unit": "ns",
            "range": "± 7027.921807812923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320480.1038961039,
            "unit": "ns",
            "range": "± 16395.82701529201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309183.5677966102,
            "unit": "ns",
            "range": "± 13650.991143584444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321297.03225806454,
            "unit": "ns",
            "range": "± 9767.814151534863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180410.433333333,
            "unit": "ns",
            "range": "± 66440.18906662987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762760.5,
            "unit": "ns",
            "range": "± 35316.57332177497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26007.711340206184,
            "unit": "ns",
            "range": "± 2847.9143902408464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114952.8469387755,
            "unit": "ns",
            "range": "± 11937.79300118817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115689.20707070707,
            "unit": "ns",
            "range": "± 7942.726668060592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110688.94444444444,
            "unit": "ns",
            "range": "± 11381.30327775557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7907.652631578947,
            "unit": "ns",
            "range": "± 879.2157623558146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24780.122448979593,
            "unit": "ns",
            "range": "± 2905.23761476643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1527492.9473684211,
            "unit": "ns",
            "range": "± 113382.161047942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2970740.7454545456,
            "unit": "ns",
            "range": "± 125570.40967878129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993546.2424242424,
            "unit": "ns",
            "range": "± 163837.12883083755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733787.295454546,
            "unit": "ns",
            "range": "± 208554.194653369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374721.84375,
            "unit": "ns",
            "range": "± 86163.8405236283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510940.590909091,
            "unit": "ns",
            "range": "± 124127.94137414121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4466891.075757576,
            "unit": "ns",
            "range": "± 127862.20099388988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4090281.1923076925,
            "unit": "ns",
            "range": "± 108324.16391295867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6726040.555555556,
            "unit": "ns",
            "range": "± 202820.81252988445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5761056.068229167,
            "unit": "ns",
            "range": "± 26467.218808746617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1692857.1873697916,
            "unit": "ns",
            "range": "± 5905.530046844233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002129.4680989584,
            "unit": "ns",
            "range": "± 2829.052352916564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655066.732682292,
            "unit": "ns",
            "range": "± 32135.779666194052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778598.4702524039,
            "unit": "ns",
            "range": "± 1738.9047460083582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778083.344921875,
            "unit": "ns",
            "range": "± 2637.50429692365"
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
          "id": "3789e108ccadf24637956b134961a96a602565c6",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:05:36+09:00",
          "tree_id": "b878dcdafcb1e7623fb1d36600d7e92799bba72d",
          "url": "https://github.com/greymistcube/libplanet/commit/3789e108ccadf24637956b134961a96a602565c6"
        },
        "date": 1691652113776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8131349.5,
            "unit": "ns",
            "range": "± 115847.7042606134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20327684.976190478,
            "unit": "ns",
            "range": "± 482377.1578075209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49615514,
            "unit": "ns",
            "range": "± 1468719.0457384556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102349906.5,
            "unit": "ns",
            "range": "± 953859.4625005542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200302571.7857143,
            "unit": "ns",
            "range": "± 1868730.620250638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66033.53125,
            "unit": "ns",
            "range": "± 12741.28711911182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299021,
            "unit": "ns",
            "range": "± 19086.671454861018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295681.8222222222,
            "unit": "ns",
            "range": "± 21915.489656619317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279344.2083333333,
            "unit": "ns",
            "range": "± 7037.634242934115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3976922.285714286,
            "unit": "ns",
            "range": "± 42365.47418354601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614361.5,
            "unit": "ns",
            "range": "± 50162.63521479217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19215.081632653062,
            "unit": "ns",
            "range": "± 2696.538860895381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88804.02631578948,
            "unit": "ns",
            "range": "± 7850.006392248523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86379.92708333333,
            "unit": "ns",
            "range": "± 7950.568860474922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94941.94791666667,
            "unit": "ns",
            "range": "± 12977.460596920617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5362.516483516483,
            "unit": "ns",
            "range": "± 839.9496726013128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17380.460674157304,
            "unit": "ns",
            "range": "± 1863.702241971973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496401.9222222222,
            "unit": "ns",
            "range": "± 127400.34123260775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2852728.074074074,
            "unit": "ns",
            "range": "± 118329.632452738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1950951.15625,
            "unit": "ns",
            "range": "± 169842.83399585556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5531245.133333334,
            "unit": "ns",
            "range": "± 245950.18108193408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281102.2,
            "unit": "ns",
            "range": "± 130378.96145847226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3368045.2470588237,
            "unit": "ns",
            "range": "± 194146.65868535632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4401865.767857143,
            "unit": "ns",
            "range": "± 188941.18354027445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3847195.7906976743,
            "unit": "ns",
            "range": "± 208867.98857798794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6885350.037974684,
            "unit": "ns",
            "range": "± 356528.4931958794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5363009.81734375,
            "unit": "ns",
            "range": "± 211921.58895800583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847322.2166341145,
            "unit": "ns",
            "range": "± 47727.02362836403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1006918.8611979167,
            "unit": "ns",
            "range": "± 10644.913183235158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496653.113754735,
            "unit": "ns",
            "range": "± 72881.6689260446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834743.5465262277,
            "unit": "ns",
            "range": "± 7400.69003776997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846232.7522321428,
            "unit": "ns",
            "range": "± 1750.6877576656645"
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
          "id": "acb61dc364257f8c7bdb68a31a2796e19c7636a3",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:07:26+09:00",
          "tree_id": "d73089ccd7b2e16613e0c77d1a844451fcc33152",
          "url": "https://github.com/greymistcube/libplanet/commit/acb61dc364257f8c7bdb68a31a2796e19c7636a3"
        },
        "date": 1691652358958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8948880.204819277,
            "unit": "ns",
            "range": "± 965700.1108553287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21119766.8,
            "unit": "ns",
            "range": "± 385422.8432886962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53947839.376811594,
            "unit": "ns",
            "range": "± 2461663.0563926105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108707601.71875,
            "unit": "ns",
            "range": "± 3317605.17504528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229004488.375,
            "unit": "ns",
            "range": "± 7088521.471942975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70857.32474226804,
            "unit": "ns",
            "range": "± 9330.708368976144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339920.9381443299,
            "unit": "ns",
            "range": "± 36797.609942147974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341847.27419354836,
            "unit": "ns",
            "range": "± 37481.46942856621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315885.65555555554,
            "unit": "ns",
            "range": "± 32344.060762532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3893452.566666667,
            "unit": "ns",
            "range": "± 114440.2663954773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3809432.8767123288,
            "unit": "ns",
            "range": "± 188185.71657009062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17776.031914893618,
            "unit": "ns",
            "range": "± 3054.407189380679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84043.22826086957,
            "unit": "ns",
            "range": "± 8214.755056581549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105152.63,
            "unit": "ns",
            "range": "± 20782.30731235956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95291.53191489361,
            "unit": "ns",
            "range": "± 13592.809579619208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6540.403225806452,
            "unit": "ns",
            "range": "± 1396.9412164697876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22930.88775510204,
            "unit": "ns",
            "range": "± 4462.204461628163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707165.2222222222,
            "unit": "ns",
            "range": "± 214172.79918949655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133531.032608696,
            "unit": "ns",
            "range": "± 197198.01122960393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2008301.2857142857,
            "unit": "ns",
            "range": "± 298980.05815325666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5684221.041666667,
            "unit": "ns",
            "range": "± 470799.66994658014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3526069.365591398,
            "unit": "ns",
            "range": "± 223070.2735736756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3594132.216494845,
            "unit": "ns",
            "range": "± 270067.89487245254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625531.014084507,
            "unit": "ns",
            "range": "± 220731.3716440023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134370.4139784947,
            "unit": "ns",
            "range": "± 350165.50160253904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7164341.783505155,
            "unit": "ns",
            "range": "± 423680.58387481567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5611923.409071181,
            "unit": "ns",
            "range": "± 277038.9378639938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1767839.8153782894,
            "unit": "ns",
            "range": "± 38435.82478832733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1006699.7091145833,
            "unit": "ns",
            "range": "± 9732.190802850462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2451764.90234375,
            "unit": "ns",
            "range": "± 62413.88895580745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769625.4975585938,
            "unit": "ns",
            "range": "± 8866.374399305752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700828.9400111607,
            "unit": "ns",
            "range": "± 7767.178261915835"
          }
        ]
      }
    ]
  }
}