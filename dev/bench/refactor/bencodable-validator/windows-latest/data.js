window.BENCHMARK_DATA = {
  "lastUpdate": 1679023627026,
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
          "id": "c10340be1d1cf8d232366c9d043a037d5cbd069b",
          "message": "Implemented IBencodable for ValidatorSet",
          "timestamp": "2023-03-17T12:04:50+09:00",
          "tree_id": "3a3a70c1894955d5d610a7a0355f6131318e3cc3",
          "url": "https://github.com/greymistcube/libplanet/commit/c10340be1d1cf8d232366c9d043a037d5cbd069b"
        },
        "date": 1679023379975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386332,
            "unit": "ns",
            "range": "± 135991.58350368004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2363269.4444444445,
            "unit": "ns",
            "range": "± 78209.6808748104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104623.3333333335,
            "unit": "ns",
            "range": "± 116810.67636290593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4740481.25,
            "unit": "ns",
            "range": "± 91755.11043896501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42610.9375,
            "unit": "ns",
            "range": "± 1913.8274778776079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7108371.428571428,
            "unit": "ns",
            "range": "± 36809.22602934108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18046266.666666668,
            "unit": "ns",
            "range": "± 100749.97814013706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46399866.666666664,
            "unit": "ns",
            "range": "± 330230.6697417658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93055013.33333333,
            "unit": "ns",
            "range": "± 472565.4797662084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185875813.33333334,
            "unit": "ns",
            "range": "± 653492.0590474649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4764230.528846154,
            "unit": "ns",
            "range": "± 7397.595191552213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519461.314174107,
            "unit": "ns",
            "range": "± 1698.0192727523208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167543.359375,
            "unit": "ns",
            "range": "± 1155.4400460823058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600086.4583333335,
            "unit": "ns",
            "range": "± 5615.426960336173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840613.0859375,
            "unit": "ns",
            "range": "± 1307.163588637152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715010.4459635416,
            "unit": "ns",
            "range": "± 735.6279521008905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2988493.3333333335,
            "unit": "ns",
            "range": "± 52844.873608200316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4761027.777777778,
            "unit": "ns",
            "range": "± 95674.04101522526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21460953.333333332,
            "unit": "ns",
            "range": "± 237892.0399396892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5643700,
            "unit": "ns",
            "range": "± 63511.01660947674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24645573.333333332,
            "unit": "ns",
            "range": "± 450854.97108536016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173064.70588235295,
            "unit": "ns",
            "range": "± 5207.985264661763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181559.74025974027,
            "unit": "ns",
            "range": "± 8768.383091363563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156087.1794871795,
            "unit": "ns",
            "range": "± 5406.19427806657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10615042.857142856,
            "unit": "ns",
            "range": "± 53814.32057455616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8362166.666666667,
            "unit": "ns",
            "range": "± 69427.18350562558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17532.978723404256,
            "unit": "ns",
            "range": "± 1874.640513086677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49259.59595959596,
            "unit": "ns",
            "range": "± 6523.863873126535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35080.769230769234,
            "unit": "ns",
            "range": "± 1409.705637683642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92658.16326530612,
            "unit": "ns",
            "range": "± 15833.306428788492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4826.80412371134,
            "unit": "ns",
            "range": "± 763.6965289407509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18976.59574468085,
            "unit": "ns",
            "range": "± 2105.4678192853517"
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
          "id": "88b208f5677505a93ee6443893ead8f429e2938f",
          "message": "Changelog",
          "timestamp": "2023-03-17T12:12:58+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/greymistcube/libplanet/commit/88b208f5677505a93ee6443893ead8f429e2938f"
        },
        "date": 1679023605576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375588.888888889,
            "unit": "ns",
            "range": "± 133308.49360457188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2360328.048780488,
            "unit": "ns",
            "range": "± 80695.83481256985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139619.1919191917,
            "unit": "ns",
            "range": "± 133683.48598024418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4784300,
            "unit": "ns",
            "range": "± 141817.7180795486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42788.333333333336,
            "unit": "ns",
            "range": "± 1916.395952387628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7357978.571428572,
            "unit": "ns",
            "range": "± 35494.40212790719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18443256.666666668,
            "unit": "ns",
            "range": "± 104875.77322491506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47483420,
            "unit": "ns",
            "range": "± 157689.89550017827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94342593.33333333,
            "unit": "ns",
            "range": "± 357871.8514988823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 186758913.33333334,
            "unit": "ns",
            "range": "± 424424.4790076939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893569.192708333,
            "unit": "ns",
            "range": "± 15365.904132974203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543213.2393973214,
            "unit": "ns",
            "range": "± 2359.4634998497727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153938.28125,
            "unit": "ns",
            "range": "± 1383.518250844031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592654.8697916665,
            "unit": "ns",
            "range": "± 10265.75708126337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862560.546875,
            "unit": "ns",
            "range": "± 11909.318375727224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787554.7135416666,
            "unit": "ns",
            "range": "± 945.0923698263937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3033369.230769231,
            "unit": "ns",
            "range": "± 34161.635026624645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4769388.888888889,
            "unit": "ns",
            "range": "± 95595.64283012366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21936780,
            "unit": "ns",
            "range": "± 193506.7005115253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5836795,
            "unit": "ns",
            "range": "± 129336.99546045146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24533485.714285713,
            "unit": "ns",
            "range": "± 259421.693705124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180042.85714285713,
            "unit": "ns",
            "range": "± 7045.861669566517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182837.25490196078,
            "unit": "ns",
            "range": "± 7353.936654182267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150314.10256410256,
            "unit": "ns",
            "range": "± 7754.558347074007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10678553.333333334,
            "unit": "ns",
            "range": "± 52646.9761262515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8415350,
            "unit": "ns",
            "range": "± 53848.53044205785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18436.59793814433,
            "unit": "ns",
            "range": "± 2238.332194681054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49081.927710843374,
            "unit": "ns",
            "range": "± 2574.9802072795205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36009.375,
            "unit": "ns",
            "range": "± 966.9904676449138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87843.87755102041,
            "unit": "ns",
            "range": "± 14663.448254298888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4752.040816326531,
            "unit": "ns",
            "range": "± 620.4802914930381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19566.666666666668,
            "unit": "ns",
            "range": "± 1195.4885957030874"
          }
        ]
      }
    ]
  }
}