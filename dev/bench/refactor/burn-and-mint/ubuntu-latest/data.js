window.BENCHMARK_DATA = {
  "lastUpdate": 1701238139035,
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
          "id": "ae984a4c9a197afcce3b5d05aed94398bb45a986",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:56:30+09:00",
          "tree_id": "a610211fe1df063f61634961f8c92f676c30a6ef",
          "url": "https://github.com/greymistcube/libplanet/commit/ae984a4c9a197afcce3b5d05aed94398bb45a986"
        },
        "date": 1701238049001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200793.4111111111,
            "unit": "ns",
            "range": "± 10996.275022662558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188881.46153846153,
            "unit": "ns",
            "range": "± 7134.045120603419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165176.2857142857,
            "unit": "ns",
            "range": "± 2877.6070234343465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146357.966666667,
            "unit": "ns",
            "range": "± 49952.16810233375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2919809.9615384615,
            "unit": "ns",
            "range": "± 26897.82409296145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19473.42,
            "unit": "ns",
            "range": "± 6833.292861934844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67502.05208333333,
            "unit": "ns",
            "range": "± 9204.783258113019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55889.030303030304,
            "unit": "ns",
            "range": "± 6279.535660486153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58246.9381443299,
            "unit": "ns",
            "range": "± 10971.579813331382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2962.2886597938145,
            "unit": "ns",
            "range": "± 648.1951377794293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15206.344086021505,
            "unit": "ns",
            "range": "± 1745.768794733636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664420.1364397323,
            "unit": "ns",
            "range": "± 12973.111197282913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197327.9596354167,
            "unit": "ns",
            "range": "± 2941.741787545785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771343.2548014323,
            "unit": "ns",
            "range": "± 2249.771496016614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953704.1764322917,
            "unit": "ns",
            "range": "± 4010.692960739103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607061.2549579327,
            "unit": "ns",
            "range": "± 1121.3323104041754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572586.8928786058,
            "unit": "ns",
            "range": "± 707.400055673671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39146.625,
            "unit": "ns",
            "range": "± 5396.228607482315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385856.2,
            "unit": "ns",
            "range": "± 96143.04678945422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554886.4285714286,
            "unit": "ns",
            "range": "± 53574.5054075292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3159666.04,
            "unit": "ns",
            "range": "± 83703.08229563592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3054097.950819672,
            "unit": "ns",
            "range": "± 136919.86842924176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6632009.833333333,
            "unit": "ns",
            "range": "± 133433.9351122098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5587134.285714285,
            "unit": "ns",
            "range": "± 29516.267083211464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15053631.615384616,
            "unit": "ns",
            "range": "± 117169.39265904618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36062567.35714286,
            "unit": "ns",
            "range": "± 270302.0902921132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72573647.2,
            "unit": "ns",
            "range": "± 519134.9517594768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149476186.92857143,
            "unit": "ns",
            "range": "± 1110200.4925968908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 922476.9782608695,
            "unit": "ns",
            "range": "± 54887.803313604454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830979.1666666667,
            "unit": "ns",
            "range": "± 60637.39837497741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1385415.8282828282,
            "unit": "ns",
            "range": "± 105647.09793661819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5653300.087912088,
            "unit": "ns",
            "range": "± 316618.6387410517"
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238132862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240388.17272727273,
            "unit": "ns",
            "range": "± 9204.477724847042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238309.11111111112,
            "unit": "ns",
            "range": "± 4888.834119271345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181243.50877192983,
            "unit": "ns",
            "range": "± 7861.551074062943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3212346.933333333,
            "unit": "ns",
            "range": "± 47618.12637231251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2965251.5384615385,
            "unit": "ns",
            "range": "± 47599.01745067046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25325.36,
            "unit": "ns",
            "range": "± 3163.539165382513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106025.6052631579,
            "unit": "ns",
            "range": "± 8931.463270876422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92898.95,
            "unit": "ns",
            "range": "± 1822.5481720584735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96638.44444444444,
            "unit": "ns",
            "range": "± 14798.117672095605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7615.773195876289,
            "unit": "ns",
            "range": "± 856.1527500144985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21701.171717171717,
            "unit": "ns",
            "range": "± 4047.023234681147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765184.291466346,
            "unit": "ns",
            "range": "± 7414.106027395809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212141.4984654018,
            "unit": "ns",
            "range": "± 2891.1329759995238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768239.6423527644,
            "unit": "ns",
            "range": "± 2891.402877581315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994610.955859375,
            "unit": "ns",
            "range": "± 44516.58602492913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608605.4188701923,
            "unit": "ns",
            "range": "± 1414.367990302524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592820.7936197916,
            "unit": "ns",
            "range": "± 10637.664894414085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44592.54639175258,
            "unit": "ns",
            "range": "± 5413.43571592289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470186.942857143,
            "unit": "ns",
            "range": "± 79622.52029380767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2660660.290322581,
            "unit": "ns",
            "range": "± 79894.80078711569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3295497.066666667,
            "unit": "ns",
            "range": "± 60305.390088954344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3135852.855670103,
            "unit": "ns",
            "range": "± 181665.2144070578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6826819.944444444,
            "unit": "ns",
            "range": "± 190613.8662399688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5907680.066666666,
            "unit": "ns",
            "range": "± 38164.600365609316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14822597.884615384,
            "unit": "ns",
            "range": "± 76616.81763113811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37652787.73076923,
            "unit": "ns",
            "range": "± 231469.3682744198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76495509.6923077,
            "unit": "ns",
            "range": "± 922584.2040724868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155123734.66666666,
            "unit": "ns",
            "range": "± 577538.9488131094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022239.1,
            "unit": "ns",
            "range": "± 59983.759090152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1978502.4242424243,
            "unit": "ns",
            "range": "± 62297.77082690755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1470960.8709677418,
            "unit": "ns",
            "range": "± 85235.0833126199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5499860.4,
            "unit": "ns",
            "range": "± 145117.28146627493"
          }
        ]
      }
    ]
  }
}