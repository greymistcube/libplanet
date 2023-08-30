window.BENCHMARK_DATA = {
  "lastUpdate": 1693380352031,
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
          "id": "39e52aba4cbde119579b4cf5df3a381e960bc8f5",
          "message": "Removed unused Get()",
          "timestamp": "2023-08-30T16:02:47+09:00",
          "tree_id": "134dcb6fe4e18ac927f34502576fb3ad458102a9",
          "url": "https://github.com/greymistcube/libplanet/commit/39e52aba4cbde119579b4cf5df3a381e960bc8f5"
        },
        "date": 1693380068768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565627.551020408,
            "unit": "ns",
            "range": "± 120899.6205690261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052710.975609756,
            "unit": "ns",
            "range": "± 161421.20809007302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1998300,
            "unit": "ns",
            "range": "± 136162.99775093724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5100326.0869565215,
            "unit": "ns",
            "range": "± 194158.87244417204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56114.13043478261,
            "unit": "ns",
            "range": "± 4279.945093663917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8815100,
            "unit": "ns",
            "range": "± 148024.29337298466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24422793.333333332,
            "unit": "ns",
            "range": "± 247531.42503721095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60813042.85714286,
            "unit": "ns",
            "range": "± 893514.8397151604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127401137.5,
            "unit": "ns",
            "range": "± 5027809.50910438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253428883.33333334,
            "unit": "ns",
            "range": "± 7558685.189766042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5581904.1015625,
            "unit": "ns",
            "range": "± 108100.43992556754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732079.7154017857,
            "unit": "ns",
            "range": "± 40502.66837959548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293471.4233398438,
            "unit": "ns",
            "range": "± 24995.656743767297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230314.609375,
            "unit": "ns",
            "range": "± 39174.59129095951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007031.990131579,
            "unit": "ns",
            "range": "± 22359.910014118646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954113.06640625,
            "unit": "ns",
            "range": "± 17290.95615534431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3841897.727272727,
            "unit": "ns",
            "range": "± 142427.2911015601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4052290.277777778,
            "unit": "ns",
            "range": "± 199073.39623175596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4915519.047619048,
            "unit": "ns",
            "range": "± 178816.9308267267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511636.363636363,
            "unit": "ns",
            "range": "± 168572.91720313887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7194806,
            "unit": "ns",
            "range": "± 285070.00172173965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302415,
            "unit": "ns",
            "range": "± 6872.6211195315855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285232.60869565216,
            "unit": "ns",
            "range": "± 10799.466125648703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261834.375,
            "unit": "ns",
            "range": "± 16037.33032071702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4914550,
            "unit": "ns",
            "range": "± 130337.0461766746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4469413.793103448,
            "unit": "ns",
            "range": "± 125313.16121774375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24353.125,
            "unit": "ns",
            "range": "± 1999.7343573584967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100577.8947368421,
            "unit": "ns",
            "range": "± 6206.279917497574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88291.48936170213,
            "unit": "ns",
            "range": "± 8133.584425541575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95207.60869565218,
            "unit": "ns",
            "range": "± 13595.241844565739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6102.083333333333,
            "unit": "ns",
            "range": "± 856.5511219777856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22259.782608695652,
            "unit": "ns",
            "range": "± 2259.050650678639"
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
          "id": "dc404976004174a02b1b7f4f50b6460bcd58eb49",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:04:43+09:00",
          "tree_id": "155e208c580ab382c2c9f1b2509ed1313ea8ad4f",
          "url": "https://github.com/greymistcube/libplanet/commit/dc404976004174a02b1b7f4f50b6460bcd58eb49"
        },
        "date": 1693380320666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591593.5483870967,
            "unit": "ns",
            "range": "± 166205.82368704616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2980859.375,
            "unit": "ns",
            "range": "± 282025.43094667525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2073426.530612245,
            "unit": "ns",
            "range": "± 251911.04818186656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5641400,
            "unit": "ns",
            "range": "± 497250.5886158285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59097.82608695652,
            "unit": "ns",
            "range": "± 14875.734191953074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8590025,
            "unit": "ns",
            "range": "± 507755.8520866922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23229238.541666668,
            "unit": "ns",
            "range": "± 1495341.2304374785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63385727.450980395,
            "unit": "ns",
            "range": "± 2545948.5681433887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126548403.22580644,
            "unit": "ns",
            "range": "± 7893892.231331816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266229430,
            "unit": "ns",
            "range": "± 7742786.841563996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5306828.541666667,
            "unit": "ns",
            "range": "± 76960.49401915044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1721133.2552083333,
            "unit": "ns",
            "range": "± 20840.21806249116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258196.5541294643,
            "unit": "ns",
            "range": "± 12834.51115705149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124917.3958333335,
            "unit": "ns",
            "range": "± 37841.04863167702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036693.8551682692,
            "unit": "ns",
            "range": "± 12712.921750888745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968678.0970982143,
            "unit": "ns",
            "range": "± 11697.166817975789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570550,
            "unit": "ns",
            "range": "± 262043.6420919705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3740662.2448979593,
            "unit": "ns",
            "range": "± 307268.43649325834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4941613.541666667,
            "unit": "ns",
            "range": "± 356636.5166000079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4244762.626262627,
            "unit": "ns",
            "range": "± 375733.8703711083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7433317.894736842,
            "unit": "ns",
            "range": "± 470961.44079842145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312562.5,
            "unit": "ns",
            "range": "± 50724.05481467452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289791.39784946234,
            "unit": "ns",
            "range": "± 32678.042940422285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252974.74747474748,
            "unit": "ns",
            "range": "± 33606.27475251761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4605851.578947368,
            "unit": "ns",
            "range": "± 317880.4705984718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4235346.391752577,
            "unit": "ns",
            "range": "± 328633.2885546136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19428.235294117647,
            "unit": "ns",
            "range": "± 2375.801206445737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95164.13043478261,
            "unit": "ns",
            "range": "± 15857.459724239465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91415.05376344085,
            "unit": "ns",
            "range": "± 16648.083492236256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104906.84210526316,
            "unit": "ns",
            "range": "± 16891.119740615934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.170212765957,
            "unit": "ns",
            "range": "± 1203.4539060759314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21500,
            "unit": "ns",
            "range": "± 6714.46200376471"
          }
        ]
      }
    ]
  }
}