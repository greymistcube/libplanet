window.BENCHMARK_DATA = {
  "lastUpdate": 1689323485264,
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
          "id": "0ee43d09d85c3cd2c092779fe5b704aa29c47f1a",
          "message": "Removed ExtractableException",
          "timestamp": "2023-07-14T17:03:42+09:00",
          "tree_id": "0a1ba4efd74af218d73d91db6b8377c76ab76028",
          "url": "https://github.com/greymistcube/libplanet/commit/0ee43d09d85c3cd2c092779fe5b704aa29c47f1a"
        },
        "date": 1689322609230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279149.6296296296,
            "unit": "ns",
            "range": "± 14610.18119792192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268835.95384615386,
            "unit": "ns",
            "range": "± 12526.37158337208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229395.33333333334,
            "unit": "ns",
            "range": "± 6425.684752496152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4257089.363636363,
            "unit": "ns",
            "range": "± 103329.26533891799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929585.3333333335,
            "unit": "ns",
            "range": "± 45829.58215212195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17188.58762886598,
            "unit": "ns",
            "range": "± 2079.9213063668285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88719.52631578948,
            "unit": "ns",
            "range": "± 8705.500476700465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70387.88235294117,
            "unit": "ns",
            "range": "± 1438.2130788913435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87333.36842105263,
            "unit": "ns",
            "range": "± 9733.083006408115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4704.103092783505,
            "unit": "ns",
            "range": "± 1084.6253623999253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17683.632653061224,
            "unit": "ns",
            "range": "± 2115.2040450804852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414385.353846154,
            "unit": "ns",
            "range": "± 60261.75442637487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549240.03125,
            "unit": "ns",
            "range": "± 78651.42902275566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1849818.8260869565,
            "unit": "ns",
            "range": "± 67165.4022594981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4709491.633333334,
            "unit": "ns",
            "range": "± 128838.59951585064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6136246.371651785,
            "unit": "ns",
            "range": "± 34508.26029677989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988020.3822115385,
            "unit": "ns",
            "range": "± 3196.6180607858473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383084.1350260417,
            "unit": "ns",
            "range": "± 1079.271449085395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605390.3175223214,
            "unit": "ns",
            "range": "± 2612.0561746770504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827547.0043945312,
            "unit": "ns",
            "range": "± 368.69765483105147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733301.3675362723,
            "unit": "ns",
            "range": "± 629.2012480958831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3490799.8666666667,
            "unit": "ns",
            "range": "± 56628.214777071116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3449680.9444444445,
            "unit": "ns",
            "range": "± 63775.29244471167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222250.333333333,
            "unit": "ns",
            "range": "± 87055.93881285892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3809190.3333333335,
            "unit": "ns",
            "range": "± 113275.35423101055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6426261.956521739,
            "unit": "ns",
            "range": "± 137519.4038921841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7706409.666666667,
            "unit": "ns",
            "range": "± 107160.22709853467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19961943.285714287,
            "unit": "ns",
            "range": "± 88745.69582666103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49366068.384615384,
            "unit": "ns",
            "range": "± 354751.2702632974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98320510.13333334,
            "unit": "ns",
            "range": "± 1811326.63830799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195665412.2,
            "unit": "ns",
            "range": "± 1232702.3619742463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45589.02173913043,
            "unit": "ns",
            "range": "± 2632.7062121555105"
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
          "id": "18521af1592775aa4ddc17220d920178c411c073",
          "message": "Changelog",
          "timestamp": "2023-07-14T17:16:58+09:00",
          "tree_id": "dddb239702524e76d9542f81534dc6cf32f15203",
          "url": "https://github.com/greymistcube/libplanet/commit/18521af1592775aa4ddc17220d920178c411c073"
        },
        "date": 1689323477930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292818.5,
            "unit": "ns",
            "range": "± 9041.524171758036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287666.5230769231,
            "unit": "ns",
            "range": "± 12639.995395454676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243655.68421052632,
            "unit": "ns",
            "range": "± 5304.299430678136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564365.066666666,
            "unit": "ns",
            "range": "± 50275.184917563834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047008.125,
            "unit": "ns",
            "range": "± 73094.56734019294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21054.458333333332,
            "unit": "ns",
            "range": "± 1974.9220366579523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92481.40625,
            "unit": "ns",
            "range": "± 6040.770570536119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76090.925,
            "unit": "ns",
            "range": "± 2689.404389189128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106266.78125,
            "unit": "ns",
            "range": "± 13103.696668620794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5601.1720430107525,
            "unit": "ns",
            "range": "± 783.4697161769768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19799.263157894737,
            "unit": "ns",
            "range": "± 2720.331993234549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515408.6494845361,
            "unit": "ns",
            "range": "± 109451.14322876756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2833440.393939394,
            "unit": "ns",
            "range": "± 80893.671962776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002001.57,
            "unit": "ns",
            "range": "± 141250.22094108086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5245958.592592592,
            "unit": "ns",
            "range": "± 145602.43353372574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244775.084895833,
            "unit": "ns",
            "range": "± 31484.93210417872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963268.36875,
            "unit": "ns",
            "range": "± 3382.4923752542777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413345.6865885416,
            "unit": "ns",
            "range": "± 3616.0428570883805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636525.588020833,
            "unit": "ns",
            "range": "± 2356.9273311335023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842931.0323567708,
            "unit": "ns",
            "range": "± 731.5731020449059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779785.123046875,
            "unit": "ns",
            "range": "± 387.75642799670993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589921.620689655,
            "unit": "ns",
            "range": "± 102941.56265655001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3884242.8666666667,
            "unit": "ns",
            "range": "± 61608.2574763048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4537030.720930233,
            "unit": "ns",
            "range": "± 168026.08666079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250243.636363637,
            "unit": "ns",
            "range": "± 102569.73945776065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6965163.586206896,
            "unit": "ns",
            "range": "± 304134.774214941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148639.346153846,
            "unit": "ns",
            "range": "± 221925.34101015906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22421006.666666668,
            "unit": "ns",
            "range": "± 286962.65000435826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56441874.6,
            "unit": "ns",
            "range": "± 901178.9055562401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111188826.06666666,
            "unit": "ns",
            "range": "± 1483549.2880540362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226439675.46666667,
            "unit": "ns",
            "range": "± 3383899.800971461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48454.336842105266,
            "unit": "ns",
            "range": "± 3315.8583741877114"
          }
        ]
      }
    ]
  }
}