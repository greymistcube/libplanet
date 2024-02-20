window.BENCHMARK_DATA = {
  "lastUpdate": 1708357040693,
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
          "id": "8119060772bfbcabc90d5894cc8190757b2ccb88",
          "message": "Remove clutter",
          "timestamp": "2024-02-19T20:50:19+09:00",
          "tree_id": "20b1db2437046912a63df1dbe166807fc824a10f",
          "url": "https://github.com/greymistcube/libplanet/commit/8119060772bfbcabc90d5894cc8190757b2ccb88"
        },
        "date": 1708351819437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952590,
            "unit": "ns",
            "range": "± 94727.42448464937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725592.2077922078,
            "unit": "ns",
            "range": "± 87357.27572843086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512831,
            "unit": "ns",
            "range": "± 156807.14636299282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11120965.217391305,
            "unit": "ns",
            "range": "± 984713.6878953822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33901.38888888889,
            "unit": "ns",
            "range": "± 1689.069504282562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5145028.571428572,
            "unit": "ns",
            "range": "± 33705.521770211446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13070484.615384616,
            "unit": "ns",
            "range": "± 78851.97995985734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32441100,
            "unit": "ns",
            "range": "± 400567.57589343505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64623176.666666664,
            "unit": "ns",
            "range": "± 798726.9526893286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132129333.33333333,
            "unit": "ns",
            "range": "± 1817278.4214182429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324999.0084134615,
            "unit": "ns",
            "range": "± 4864.653304862978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050376.6376201923,
            "unit": "ns",
            "range": "± 1940.0897965155862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747129.8452524039,
            "unit": "ns",
            "range": "± 3170.39684950857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901186.6135817308,
            "unit": "ns",
            "range": "± 1725.5273052008795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615301.1458333334,
            "unit": "ns",
            "range": "± 2840.159779978429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579481.8359375,
            "unit": "ns",
            "range": "± 1979.4474729036212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156834.782608696,
            "unit": "ns",
            "range": "± 49070.62129621078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294488.095238095,
            "unit": "ns",
            "range": "± 81757.51759984074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2770506.6666666665,
            "unit": "ns",
            "range": "± 49877.51378078484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2812731.884057971,
            "unit": "ns",
            "range": "± 132608.02421461535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12505106.666666666,
            "unit": "ns",
            "range": "± 1637746.3231011878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173401.33333333334,
            "unit": "ns",
            "range": "± 8380.551703011375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169740.58823529413,
            "unit": "ns",
            "range": "± 10908.511568947431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140578.72340425532,
            "unit": "ns",
            "range": "± 4836.183195464426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796016.6666666665,
            "unit": "ns",
            "range": "± 18220.80894987593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559620,
            "unit": "ns",
            "range": "± 41517.2459862852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10390.425531914894,
            "unit": "ns",
            "range": "± 1389.0562394411393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54415.95744680851,
            "unit": "ns",
            "range": "± 6196.778614931377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43273.4375,
            "unit": "ns",
            "range": "± 1740.3012134375083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54957.142857142855,
            "unit": "ns",
            "range": "± 11978.468655892797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2540,
            "unit": "ns",
            "range": "± 435.0103936151313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11321.052631578947,
            "unit": "ns",
            "range": "± 1461.5566415125293"
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
          "id": "78fbe3fda20683193ef2dced22c81d4c39117831",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-19T23:28:50+09:00",
          "tree_id": "794c843bea0f3e5257fa40280443f9ed020c53bd",
          "url": "https://github.com/greymistcube/libplanet/commit/78fbe3fda20683193ef2dced22c81d4c39117831"
        },
        "date": 1708353716159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965916.6666666666,
            "unit": "ns",
            "range": "± 102082.42068174567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1677916.3636363635,
            "unit": "ns",
            "range": "± 71406.8125280836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481554.081632653,
            "unit": "ns",
            "range": "± 150545.76190138166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11037636.842105264,
            "unit": "ns",
            "range": "± 1035695.6426800863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34571.910112359554,
            "unit": "ns",
            "range": "± 2082.2839713360286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5079735.714285715,
            "unit": "ns",
            "range": "± 43519.802869018626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13542506.666666666,
            "unit": "ns",
            "range": "± 82614.55654048476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32703314.285714287,
            "unit": "ns",
            "range": "± 257168.11878357184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67723000,
            "unit": "ns",
            "range": "± 797346.5521877637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129286314.28571428,
            "unit": "ns",
            "range": "± 679528.3996523367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318182.589285714,
            "unit": "ns",
            "range": "± 12821.75794041356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064587.416294643,
            "unit": "ns",
            "range": "± 3786.4375051116263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745639.8958333334,
            "unit": "ns",
            "range": "± 1295.3963151164621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965433.2589285714,
            "unit": "ns",
            "range": "± 5205.06493846004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619369.3708147322,
            "unit": "ns",
            "range": "± 543.4708484748368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560492.6897321428,
            "unit": "ns",
            "range": "± 1498.2043365007069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2213288.6363636362,
            "unit": "ns",
            "range": "± 60790.934972588126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277256.1403508773,
            "unit": "ns",
            "range": "± 98951.28855283122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2763961.904761905,
            "unit": "ns",
            "range": "± 65618.8195275599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2677733.7662337665,
            "unit": "ns",
            "range": "± 98587.75894227652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12385604.395604396,
            "unit": "ns",
            "range": "± 1545623.5209931072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164122.22222222222,
            "unit": "ns",
            "range": "± 8005.37182714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159386.25,
            "unit": "ns",
            "range": "± 7923.283166670272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140525,
            "unit": "ns",
            "range": "± 4776.060700405041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859846.6666666665,
            "unit": "ns",
            "range": "± 48515.533104161106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2377915.3846153845,
            "unit": "ns",
            "range": "± 34651.812029431836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10535.051546391753,
            "unit": "ns",
            "range": "± 1461.024272350951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50998.958333333336,
            "unit": "ns",
            "range": "± 4752.1960528329855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43294.339622641506,
            "unit": "ns",
            "range": "± 1796.5153336325236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49395.833333333336,
            "unit": "ns",
            "range": "± 9518.50183552971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2203.125,
            "unit": "ns",
            "range": "± 396.020500532618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9065.95744680851,
            "unit": "ns",
            "range": "± 1025.3300744690048"
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
          "id": "7aa8853a05ca98a88391517b3fc1d0409ea3c9cc",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T00:25:14+09:00",
          "tree_id": "9a15a671f07b8f532de30902b1889237f2953701",
          "url": "https://github.com/greymistcube/libplanet/commit/7aa8853a05ca98a88391517b3fc1d0409ea3c9cc"
        },
        "date": 1708357009913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995369.387755102,
            "unit": "ns",
            "range": "± 110847.08391289518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740370,
            "unit": "ns",
            "range": "± 69991.99152439529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1541698.9361702127,
            "unit": "ns",
            "range": "± 159226.06468877968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6848488.235294118,
            "unit": "ns",
            "range": "± 278500.94696216664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36960,
            "unit": "ns",
            "range": "± 669.5414208887411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5049421.428571428,
            "unit": "ns",
            "range": "± 40561.58050651889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13428800,
            "unit": "ns",
            "range": "± 71761.85362965227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31882321.42857143,
            "unit": "ns",
            "range": "± 218989.88887291445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65069546.15384615,
            "unit": "ns",
            "range": "± 301166.6333205607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131410442.85714285,
            "unit": "ns",
            "range": "± 1548243.3990291585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306761.5104166665,
            "unit": "ns",
            "range": "± 11987.957688441056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062455.8035714286,
            "unit": "ns",
            "range": "± 2198.1519638994805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744313.0789620535,
            "unit": "ns",
            "range": "± 4074.7539306386557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934554.84375,
            "unit": "ns",
            "range": "± 3851.2274639329717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613040.4752604166,
            "unit": "ns",
            "range": "± 1532.357640099112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574983.5091145834,
            "unit": "ns",
            "range": "± 1947.825047463051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2193443.9024390243,
            "unit": "ns",
            "range": "± 74349.67064076508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241086.6666666665,
            "unit": "ns",
            "range": "± 66922.39320768257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2777178.947368421,
            "unit": "ns",
            "range": "± 59899.19846382076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2798461.1764705884,
            "unit": "ns",
            "range": "± 142231.6998807945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7863016.279069767,
            "unit": "ns",
            "range": "± 258883.64359139875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168736.84210526315,
            "unit": "ns",
            "range": "± 7247.0346541323715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165349.33333333334,
            "unit": "ns",
            "range": "± 8132.025001844904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140069.44444444444,
            "unit": "ns",
            "range": "± 3844.9090232182866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838231.25,
            "unit": "ns",
            "range": "± 55635.28519144423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458553.3333333335,
            "unit": "ns",
            "range": "± 33579.22118272095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10365.591397849463,
            "unit": "ns",
            "range": "± 1212.4799078259896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52235.71428571428,
            "unit": "ns",
            "range": "± 2820.221424150813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45158.620689655174,
            "unit": "ns",
            "range": "± 1847.3342085721574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54791.836734693876,
            "unit": "ns",
            "range": "± 13089.262723831393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2492.8571428571427,
            "unit": "ns",
            "range": "± 456.8493627074307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9777.083333333334,
            "unit": "ns",
            "range": "± 1248.955704129331"
          }
        ]
      }
    ]
  }
}