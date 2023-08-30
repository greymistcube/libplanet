window.BENCHMARK_DATA = {
  "lastUpdate": 1693380097352,
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
      }
    ]
  }
}